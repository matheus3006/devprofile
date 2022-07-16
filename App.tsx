import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AuthContext } from './src/context/AuthContext';
import theme from './src/global/styles/theme';
import { Routes } from './src/routes';

const App: React.FunctionComponent = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={{ name: 'Jorge' }}>
          <Routes />
        </AuthContext.Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
