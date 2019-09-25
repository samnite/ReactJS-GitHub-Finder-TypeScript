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

interface OwnProps {}
interface Alert {
  msg: string;
  type: string;
}

type Props = OwnProps;

const App: FunctionComponent<Props> = props => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<Alert | null>(null);

  // Search GitHub users
  const searchUsers = async (text: string) => {
    setLoading(true);
    setAlert(null);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  // clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  // Set alert message
  const showAlert = (msg: string, type: string) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 4000);
  };

  // Get a single Github user
  const getUser = async (username: string) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(res.data);
    setLoading(false);
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
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0}
                    setAlert={showAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={props => (
                <User
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  //@ts-ignore
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
