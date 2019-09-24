import React, { FunctionComponent } from 'react';

interface OwnProps {
  alert: {
    type: string;
    msg: string;
  } | null;
}

type Props = OwnProps;

const Alert: FunctionComponent<Props> = ({ alert }): any => {
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
