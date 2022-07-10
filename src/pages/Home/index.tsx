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
} from './styles';

import avatarDefault from '../../assets/avatar02.png';

export const Home: React.FunctionComponent = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={() => {}}>
              <UserAvatar source={avatarDefault} />
            </UserAvatarButton>

            <UserInfoDetail>
              <UserGreating>Olá, </UserGreating>
              <UserName> Jorge </UserName>
            </UserInfoDetail>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>
    </Container>
  );
};
