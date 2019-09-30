import { createContext } from 'react';
import { Repo } from '../../components/repos/repo-item';

export interface GithubStateType {
  users: any;
  user: any;
  repos: Repo[];
  loading: boolean;
  clearUsers: () => any;
  getUser: (user: string) => any;
  getUserRepos: (users: string) => any;
  searchUsers: (user: string) => any;
}
const GithubContext = createContext<GithubStateType>({} as GithubStateType);

export default GithubContext;
