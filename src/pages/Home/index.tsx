import React from 'react';
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  UserAvatarButton,
  UserAvatar,
  UserInfoDetail,
  UserGreating,
  UserName,
  Icon,
  LogOutButton,
} from './styles';

import avatarDefault from '../../assets/avatar02.png';
import { useAuth } from '../../context/AuthContext';
import { Alert } from 'react-native';
import { IUser } from '../../model/user';
import { api } from '../../services/api';

export const Home: React.FunctionComponent = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);

  const { user, signOut } = useAuth();

  React.useEffect(() => {
    const loadUsers = async () => {
      const response = await api.get('users');
      setUsers(response.data);
    };

    loadUsers();
  }, []);

  console.log(users);

  const handleSignOut = () => {
    Alert.alert('Tem certeza', 'Deseja realmente sair da aplicaçao?', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Sair da aplicaçao',
        onPress: () => {
          signOut();
        },
      },
    ]);
  };

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={() => {}}>
              <UserAvatar
                source={
                  user.avatar_url ? { uri: user.avatar_url } : avatarDefault
                }
              />
            </UserAvatarButton>

            <UserInfoDetail>
              <UserGreating>Olá, </UserGreating>
              <UserName> {user.name} </UserName>
            </UserInfoDetail>
          </UserInfo>
          <LogOutButton
            onPress={() => {
              handleSignOut();
            }}
          >
            <Icon name="power" />
          </LogOutButton>
        </UserWrapper>
      </Header>
    </Container>
  );
};
