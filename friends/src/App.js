import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({ ...this.state, friends: res.data }))
      .catch(err => {throw new Error(err)});
  }

  render() {
    console.log(this.state.friends);
    return (
      <div>
      </div>
    );
  }
}

export default App;
