import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './src/context/AuthContext';
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar backgroundColor="trasnparent" translucent />
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </ThemeProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
