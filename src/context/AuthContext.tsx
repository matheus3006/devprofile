import React from 'react';

interface IAuthContext {
  name: string;
  signIn(): void;
}

interface IProps {
  children: React.ReactElement;
}

export const AuthContext = React.createContext<IAuthContext>(
  {} as IAuthContext,
);

export const AuthProvider: React.FunctionComponent<IProps> = ({ children }) => {
  const signIn = () => {
    console.log('Contexto signIn');
  };

  return (
    <AuthContext.Provider value={{ name: 'jorge', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
