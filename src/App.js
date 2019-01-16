import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  handleClick = api => e => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch('/.netlify/functions/' + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }));
  };

  render() {
    const { loading, msg } = this.state;

    return (
      <p>
        <button onClick={this.handleClick('hello')}>
          {loading ? 'Loading...' : 'Call Lambda'}
        </button>
        <button onClick={this.handleClick('async-chuck-norris')}>
          {loading ? 'Loading...' : 'Call Async Lambda'}
        </button>
        <br />
        <span>{msg}</span>
      </p>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
           <img id="logo" src={logo} alt="Salt Wolf Studios Logo" width="800" height="800">
           </img>
           <br></br>
           Site Under Construction...
          </p>
          <LambdaDemo />
        </header>
      </div>
    );
  }
}

export default App;
