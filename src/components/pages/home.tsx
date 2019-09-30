import React, { FunctionComponent, Fragment } from 'react';

import Search from '../users/search';
import Users from '../users/users';

const Home: FunctionComponent = () => (
  <Fragment>
    <Search />
    <Users />
  </Fragment>
);

export default Home;
