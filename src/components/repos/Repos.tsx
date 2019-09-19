import React, { FunctionComponent } from 'react';
import RepoItem, { Repo } from './RepoItem';

interface ReposProps extends Repo {
  repos: Repo[];
}

type Props = ReposProps;

const Repos: FunctionComponent<Props> = ({ repos }): any => {
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

export default Repos;
