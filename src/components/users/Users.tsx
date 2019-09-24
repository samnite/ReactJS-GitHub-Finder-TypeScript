import React, { FunctionComponent } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import '../../App.css';

interface OwnProps {
  loading: boolean;
  users: string[];
}

type Props = OwnProps;

const Users: FunctionComponent<Props> = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="userStyle">
        {users.map(user => {
          // @ts-ignore
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
};

export default Users;
