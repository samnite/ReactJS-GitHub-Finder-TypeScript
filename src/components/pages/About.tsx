import React, { FunctionComponent, Fragment } from 'react';

interface OwnProps {}

type Props = OwnProps;

const About: FunctionComponent<Props> = props => {
  return (
    <Fragment>
      <h1>About this App</h1>
      <p>App to search Github users</p>
      <p>Version 1.0.0</p>
    </Fragment>
  );
};

export default About;
