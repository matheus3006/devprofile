import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input/Index';
import { Container, Content, Title } from './styles';

export const SignUp: React.FunctionComponent = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Content>
          <Title>Cria sua Conta</Title>
          <Input placeholder="Nome Completo" />
          <Input placeholder="Email" />
          <Input placeholder="Senha" />


          <Button title="Criar conta" />
        </Content>
      </Container>
    </ScrollView>
  );
};
