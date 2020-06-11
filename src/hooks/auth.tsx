import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  auth: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
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
    console.log('user: ', user);

    if (!user) {
      throw new Error('User não existe');
    }

    // Buscar token
    const tokenResponse = await api.get(
      `token/sign/${email}/${user.id_utilizador}`,
    );

    const { token } = tokenResponse.data;
    console.log('token: ', token);

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setAuthData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');

    setAuthData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ auth: authData, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

//hook
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
