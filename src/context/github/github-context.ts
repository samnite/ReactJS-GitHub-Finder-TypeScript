import { createContext } from 'react';
import { Repo } from '../../components/repos/repo-item';

export interface GithubStateType {
  users: string[];
  user: {
    name: string;
    avatar_url: string;
    location: string;
    bio: string;
    blog: string;
    login: string;
    html_url: string;
    company: string;
    followers: string;
    following: string;
    public_repos: string;
    public_gists: string;
    hireable: string;
  };
  repos: Repo[];
  loading: boolean;
  clearUsers: () => any;
  getUser: (user: string) => any;
  getUserRepos: (users: string) => any;
  searchUsers: (user: string) => any;
}
const GithubContext = createContext<GithubStateType>({} as GithubStateType);

export default GithubContext;
