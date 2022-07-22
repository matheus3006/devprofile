import React from 'react';

import AvatarDefault from '../../assets/avatar02.png';
import { IUser } from '../../model/user';
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

interface UserProps {
  data: IUser;
  onPress: () => void;
}

export const User: React.FunctionComponent<UserProps> = ({ data, onPress }) => {
  return (
    <Container onPress={onPress}>
      <UserDetail>
        <UserNameDetail>
          <NameTitle>Name</NameTitle>
          <NameData> {data.name} </NameData>
        </UserNameDetail>

        <UserEmailDetail>
          <EmailTitle>Email</EmailTitle>
          <EmailData> {data.email} </EmailData>
        </UserEmailDetail>

        <UserAvatar
          source={data.avatar_url ? { uri: data.avatar_url } : AvatarDefault}
        />
      </UserDetail>
    </Container>
  );
};
