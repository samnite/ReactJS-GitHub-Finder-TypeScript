import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const NotFound: FunctionComponent<Props> = props => {
  return (
    <div>
      <h1>Not Found</h1>
      <p className="lead">The page you are looking for does not exist...</p>
    </div>
  );
};

export default NotFound;
