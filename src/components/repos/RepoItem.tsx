import React, { FunctionComponent } from 'react';

export interface Repo {
  name?: string;
  html_url?: string;
  id?: string;
  repo?: any; // need to fix
}

interface RepoItemProps extends Repo {}

type Props = RepoItemProps;

const RepoItem: FunctionComponent<Props> = ({ repo }: Repo) => {
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

export default RepoItem;
