import React, { FunctionComponent, Fragment } from 'react';
import spinner from './spinner-img.gif';

interface OwnProps {}

type Props = OwnProps;

const Spinner: FunctionComponent<Props> = props => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </Fragment>
  );
};

export default Spinner;
