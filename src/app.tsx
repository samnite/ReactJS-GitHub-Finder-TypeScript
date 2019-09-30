import React, { FunctionComponent, Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';
import Navbar from './components/layout/navbar';
import axios from 'axios';
import Users from './components/users/users';
import Search from './components/users/search';
import Alert from './components/layout/аlert';
import About from './components/pages/about';
import User from './components/users/user';
import GithubState from './context/github/github-state';

interface OwnProps {}
interface Alert {
  msg: string;
  type: string;
}

type Props = OwnProps;

const App: FunctionComponent<Props> = props => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<Alert | null>(null);

  // Set alert message
  const showAlert = (msg: string, type: string): void => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 4000);
  };

  // Get users repos
  const getUserRepos = async (username: string) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setRepos(res.data);
    setLoading(false);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={props => (
                  //@ts-ignore
                  <User {...props} getUserRepos={getUserRepos} repos={repos} />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
