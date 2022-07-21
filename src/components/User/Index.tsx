import React from 'react';

import AvatarDefault from '../../assets/avatar02.png';
import {
  Container,
  EmailData,
  EmailTitle,
  NameData,
  NameTitle,
  UserAvatar,
  UserDetail,
  UserEmailDetail,
  UserNameDetail,
} from './Styles';

export const User: React.FunctionComponent = () => {
  return (
    <Container>
      <UserDetail>
        <UserNameDetail>
          <NameTitle>Name</NameTitle>
          <NameData> Meah Developer </NameData>
        </UserNameDetail>

        <UserEmailDetail>
          <EmailTitle>Email</EmailTitle>
          <EmailData> meah@icloud.com </EmailData>
        </UserEmailDetail>

        <UserAvatar source={AvatarDefault} />
      </UserDetail>
    </Container>
  );
};
