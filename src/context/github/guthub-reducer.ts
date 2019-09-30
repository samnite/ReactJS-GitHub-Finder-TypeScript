import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types';

type Action =
  | { type: 'GET_REPOS'; payload: any; loading: boolean }
  | { type: 'GET_USER'; payload: any; loading: boolean }
  | { type: 'SEARCH_USERS'; payload: string }
  | { type: 'SET_LOADING' }
  | { type: 'CLEAR_USERS' };

export default (state: any, action: Action) => {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
