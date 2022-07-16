import React from 'react';

interface IAuthContext {
  name: string;
}

interface IProps {
  children: React.ReactElement;
}

export const AuthContext = React.createContext<IAuthContext>(
  {} as IAuthContext,
);

export const AuthProvider: React.FunctionComponent<IProps> = ({ children }) => {
  return (
    <AuthContext.Provider value={{ name: 'jorge' }}>
      {children}
    </AuthContext.Provider>
  );
};
