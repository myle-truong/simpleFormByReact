import React, { Component } from 'react';
import Login from './Login';

const isLoggedIn = false;

const currentTime = new Date('Wed Feb 06 2020 02:07:00 GMT+0530').getHours();
console.log(currentTime);

//check login condition

class App extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: ''
    };
  }

  // Auto color run depend on current time

  backgroundColors = () => {
    if (currentTime >= 23 && currentTime < 7) {
      this.setState({
        backgroundColor: 'red'
      });
    }
    if (currentTime > 7 && currentTime < 14) {
      this.setState({
        backgroundColor: 'blue'
      });
    } else {
      this.setState({
        backgroundColor: 'green'
      });
    }
    console.log(this.state.backgroundColor);
  };

  //check conditional login
  renderConditionally = () => {
    if (isLoggedIn === true) {
      return <h1>Hello</h1>;
    } else {
      return <Login backgroundColors={this.backgroundColors} />;
    }
  };
  render() {
    return <div className="container">{this.renderConditionally()}</div>;
  }
}

export default App;
