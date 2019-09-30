import React, { FunctionComponent, useReducer } from 'react';
import axios from 'axios';
import GithubReducer from './guthub-reducer';
import GithubContext from './github-context';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types';

interface OwnProps {}

type Props = OwnProps;

let githubClientId: string | undefined;
let githubClientSecret: string | undefined;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState: FunctionComponent<Props> = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text: string) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };
  // Get User
  const getUser = async (username: string) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data,
      loading: false
    });
  };

  // Get User Repos
  const getUserRepos = async (username: string) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
      loading: false
    });
  };
  // Clear Users
  const clearUsers = (): void =>
    dispatch({
      type: CLEAR_USERS
    });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
