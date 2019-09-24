import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface OwnProps {
  user: { login?: string; avatar_url?: string; html_url?: string };
  key: string;
}

type Props = OwnProps;

const UserItem: FunctionComponent<Props> = ({
  user: { login, avatar_url, html_url }
}) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
        More
      </Link>
    </div>
  );
};

export default UserItem;
