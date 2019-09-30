import React, { FunctionComponent, useContext } from 'react';
import AlertContext from '../../context/alert/alert-context';

interface OwnProps {}

type Props = OwnProps;

const Alert: FunctionComponent<Props> = (): any => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
