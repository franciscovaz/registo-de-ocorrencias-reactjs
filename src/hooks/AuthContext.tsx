import React, { createContext, useCallback } from 'react';

import { string } from 'yup';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

interface userData {
  id_utilizador: number;
  password_utilizador: string;
  nome_utilizador: string;
}

interface userToken {
  token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.get<userData[]>(`utilizador-login/${email}`, {
      params: { email },
    });

    const { id_utilizador } = response.data[0];

    //console.log(id_utilizador);

    // Buscar token
    const tokenResponse = await api.get<userToken>(
      `token/sign/${email}/${id_utilizador}`,
    );

    const { token } = tokenResponse.data;
    console.log(token);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Francisco', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
