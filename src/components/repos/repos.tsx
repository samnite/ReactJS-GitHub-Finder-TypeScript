import React, { FunctionComponent, useContext } from 'react';
import RepoItem, { Repo } from './repo-item';
import GithubContext, {
  GithubStateType
} from '../../context/github/github-context';

interface ReposProps extends Repo {}

type Props = ReposProps;

const Repos: FunctionComponent<Props> = (): any => {
  const githubContext = useContext<GithubStateType>(GithubContext);
  const { repos } = githubContext;
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

export default Repos;
