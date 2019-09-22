import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import axios from 'axios';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import { Repo } from './components/repos/RepoItem';

type State = Readonly<{
  users: []; //need to fix
  user: {}; // need to fix
  repos: Repo[];
  loading: boolean;
  alert: string;
}>;

interface UserType {
  // user data
}

class App extends React.Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  };

  // Search GitHub users
  searchUsers = async (text: string) => {
    this.setState({ loading: true, alert: null });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  // Set alert message
  setAlert = (msg: string, type: string) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null }), 4000);
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
        </div>
      </Router>
    );
  }
}

export default App;
