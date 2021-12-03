import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface signInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: signInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@SGP:token');
    const user = localStorage.getItem('@SGP:user');

    if (token && user) {
      // vai definir como padrao um header com o nome authorization e isso se aplica a todas requisicoes
      api.defaults.headers.authorization = `${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('login', { email, password });

    const { token, user } = response.data.token;

    localStorage.setItem('@SGP:token', token);
    localStorage.setItem('@SGP:user', JSON.stringify(user));

   api.defaults.headers.authorization = `${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@SGP:token');
    localStorage.removeItem('@SGP:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}

export default AuthContext;
