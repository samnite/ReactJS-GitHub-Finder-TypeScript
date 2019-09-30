import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';
import Navbar from './components/layout/navbar';
import Alert from './components/layout/аlert';
import About from './components/pages/about';
import User from './components/users/user';
import GithubState from './context/github/github-state';
import AlertState from './context/alert/alert-state';
import Home from './components/pages/home';
import NotFound from './components/pages/not-found';

interface OwnProps {}

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
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
