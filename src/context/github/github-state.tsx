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

const GithubState: FunctionComponent<Props> = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };
  // @ts-ignore
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text: string) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };
  // Get User
  const getUser = async (username: string) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  // Get Repos

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
        // @ts-ignore
        users: state.users,
        // @ts-ignore
        user: state.user,
        // @ts-ignore
        repos: state.repos,
        // @ts-ignore
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
