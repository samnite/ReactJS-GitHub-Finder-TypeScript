import { createContext } from 'react';

export interface AlertStateType {
  alert: {
    msg: string;
    type: string;
  } | null;
  setAlert: (msg: string, type: string) => void;
}

const AlertContext = createContext<AlertStateType>({} as AlertStateType);

export default AlertContext;
