import React, { FunctionComponent, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';
import Navbar from './components/layout/navbar';
import Users from './components/users/users';
import Search from './components/users/search';
import Alert from './components/layout/аlert';
import About from './components/pages/about';
import User from './components/users/user';
import GithubState from './context/github/github-state';
import AlertState from './context/alert/alert-state';

interface OwnProps {}
interface Alert {
  msg: string;
  type: string;
}

type Props = OwnProps;

const App: FunctionComponent<Props> = props => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
