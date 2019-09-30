import React, { FunctionComponent, useContext } from 'react';
import Spinner from '../layout/spinner';
import UserItem from './user-item';
import '../../app.css';
import GithubContext, {
  ContextState
} from '../../context/github/github-context';

interface OwnProps {}

type Props = OwnProps;

const Users: FunctionComponent<Props> = () => {
  const githubContext = useContext<ContextState>(GithubContext);

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
