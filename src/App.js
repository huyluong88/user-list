import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './containers/user-list';
import UserDetails from './containers/user-detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h2>Username list:</h2>
        <UserList />
        <h2>User Details:</h2>
        <UserDetails />
      </div>
    );
  }
}

export default App;
