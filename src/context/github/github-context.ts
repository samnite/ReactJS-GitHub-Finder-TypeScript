import { createContext } from 'react';
import { Repo } from '../../components/repos/repo-item';

export interface ContextState {
  users: any;
  user: any;
  repos: Repo[];
  loading: boolean;
  clearUsers: () => any;
  getUser: (user: string) => any;
}
// @ts-ignore
const GithubContext = createContext<ContextState>();

export default GithubContext;
