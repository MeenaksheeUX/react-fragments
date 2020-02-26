import React, { Component } from 'react';
import logo from "./logo.svg";
import "./App.css";
import Fragment from './Fragment';
import ArrayExample from "./ArrayExample";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fragment />
        <ArrayExample />
      </div>
    );
  }
}
export default App;
