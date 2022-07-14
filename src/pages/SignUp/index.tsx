import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input/Index';
import {
  BackToSignIn,
  BackToSignInTitle,
  Container,
  Content,
  Icon,
  Logo,
  Title,
} from './styles';
import logo from '../../assets/logo.png';

interface ScreenNavigationProp {
  goBack: () => void;
}

export const SignUp: React.FunctionComponent = () => {
  const { goBack } = useNavigation<ScreenNavigationProp>();

  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Content>
            <Logo source={logo} />
            <Title>Cria sua Conta</Title>
            <Input placeholder="Nome Completo" />
            <Input placeholder="Email" />
            <Input placeholder="Senha" />

            <Button title="Criar conta" />
          </Content>
        </Container>
      </ScrollView>
      <BackToSignIn onPress={() => goBack()}>
        <Icon name="arrow-left" />
        <BackToSignInTitle> Entrar na minha Conta </BackToSignInTitle>
      </BackToSignIn>
    </KeyboardAvoidingView>
  );
};