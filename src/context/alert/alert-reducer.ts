import { SET_ALERT, REMOVE_ALERT } from '../types';

type Action =
  | { type: 'SET_ALERT'; payload: { msg: string; type: string } }
  | { type: 'REMOVE_ALERT' };

export default (state: any, action: Action) => {
  switch (action.type) {
    case SET_ALERT:
      return action.payload;
    case REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};
