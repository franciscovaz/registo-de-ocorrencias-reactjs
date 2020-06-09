import React, { createContext, useCallback, useState } from 'react';

import { string } from 'yup';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  auth: object;
  signIn(credentials: SignInCredentials): Promise<void>;
}

interface AuthState {
  token: string;
  user: object;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthState>(() => {
    const userToken = localStorage.getItem('@GoBarber:token');
    const userInfo = localStorage.getItem('@GoBarber:user');

    if (userToken && userInfo) {
      return { token: userToken, user: JSON.parse(userInfo) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.get(`utilizador-login/${email}`, {
      params: { email },
    });

    const user = response.data[0];

    //console.log(id_utilizador);

    // Buscar token
    const tokenResponse = await api.get(
      `token/sign/${email}/${user.id_utilizador}`,
    );

    const { token } = tokenResponse.data;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setAuthData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ auth: authData, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
