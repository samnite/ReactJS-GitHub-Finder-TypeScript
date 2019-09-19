import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

type State = Readonly<{}>;

class App extends React.Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
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
