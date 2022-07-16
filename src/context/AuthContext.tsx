import React from 'react';
import { Alert } from 'react-native';
import { api } from '../services/api';

interface ICredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  name: string;
  signIn(credentials: ICredentials): void;
}

interface IProps {
  children: React.ReactElement;
}

export const AuthContext = React.createContext<IAuthContext>(
  {} as IAuthContext,
);

export const AuthProvider: React.FunctionComponent<IProps> = ({ children }) => {
  const signIn = async ({ email, password }: ICredentials) => {
    try {
      const response = await api.post('sessions', { email, password });
      console.log(response.data);
    } catch (err) {
      Alert.alert(
        'Erro na auteenticação',
        'Occorreu um erro ao fazer login, verifique as credencias',
      );
    }
  };

  return (
    <AuthContext.Provider value={{ name: 'jorge', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
