import React, { FunctionComponent, useContext } from 'react';

import Spinner from '../layout/spinner';
import UserItem from './user-item';
import '../../app.css';
import GithubContext, {
  GithubStateType
} from '../../context/github/github-context';

const Users: FunctionComponent = () => {
  const githubContext = useContext<GithubStateType>(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="userStyle">
        {users.map((user: any) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
};

export default Users;
