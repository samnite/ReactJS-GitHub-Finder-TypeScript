import React from 'react';
import './App.css';

type State = Readonly<{

}>;

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
    <div className="App">
      Hello
    </div>
  );
}}

export default App;
