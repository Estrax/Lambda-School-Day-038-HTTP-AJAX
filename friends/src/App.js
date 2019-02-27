import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Friends from './components/Friends';
import NewFriend from './components/NewFriend';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friends: []
		};

		this.addNewFriend = this.addNewFriend.bind(this);
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/friends')
			.then(res => this.setState({ ...this.state, friends: res.data }))
			.catch(err => {throw new Error(err)});
	}

	addNewFriend(e, user) {
		e.preventDefault();
		let newUser = {
			id: this.state.friends.length+1,
			name: user.name,
			age: user.age,
			email: user.email
		}
		this.setState({
			...this.state,
			friends: [...this.state.friends, newUser]
		});
	}

	render() {
		return (
			<div>
				<Friends friends={this.state.friends} />
				<NewFriend submitForm={this.addNewFriend} />
			</div>
		);
	}
}

export default App;
