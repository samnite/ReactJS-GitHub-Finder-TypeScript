import React, { FunctionComponent, useReducer } from 'react';
import { SET_ALERT, REMOVE_ALERT } from '../types';
import AlertContext from './alert-context';
import AlertReducer from './alert-reducer';

interface OwnProps {}

type Props = OwnProps;

const AlertState: FunctionComponent<Props> = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msg: string, type: string): void => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    });
    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT
        }),
      4000
    );
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
