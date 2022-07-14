import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useForm, FieldValues } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Form/Button';
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
import { InputControl } from '../../components/Form/InputControl/Index';

interface ScreenNavigationProp {
  goBack: () => void;
}

interface IFormInputs {
  [name: string]: any;
}

export const SignUp: React.FunctionComponent = () => {
  const { handleSubmit, control } = useForm<FieldValues>();

  const handleSignUp = (form: IFormInputs) => {
    const data = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    console.log(data);
  };

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
            <InputControl
              placeholder="Nome Completo"
              autoCorrect={false}
              control={control}
              name="name"
            />
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              keyboardType="email-address"
              placeholder="Email"
              name="email"
            />
            <InputControl
              name="password"
              placeholder="Senha"
              control={control}
              autoCorrect={false}
              secureTextEntry
            />

            <Button title="Criar conta" onPress={handleSubmit(handleSignUp)} />
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
