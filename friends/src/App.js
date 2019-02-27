import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Friends from './components/Friends';
import FriendForm from './components/FriendForm';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friends: [],
			id: -1,
			update: false
		};

		this.getAllFriends = this.getAllFriends.bind(this);
		this.addNewFriend = this.addNewFriend.bind(this);
		this.updateFriend = this.updateFriend.bind(this);
		this.deleteFriend = this.deleteFriend.bind(this);
		this.setUser = this.setUser.bind(this);
	}

	componentDidMount() {
		this.getAllFriends();
	}

	setUser(id) {
		this.setState({
			...this.state,
			id: id,
			update: true
		});
	}

	getAllFriends() {
		axios
			.get('http://localhost:5000/friends')
			.then(res => this.setState({ ...this.state, friends: res.data }))
			.catch(err => {throw new Error(err)});
	}

	addNewFriend(user) {
		axios
			.post('http://localhost:5000/friends', {
				id: this.state.friends.length+1,
				name: user.name,
				age: user.age,
				email: user.email
			})
			.then(res => this.setState({ friends: res.data }))
			.catch(err => {throw new Error(err)});
	}

	updateFriend(user) {
		axios
			.put(`http://localhost:5000/friends/${user.id}`, {
				name: user.name,
				age: user.age,
				email: user.email
			})
			.then(res => this.setState({ friends: res.data }))
			.catch(err => { throw new Error(err)});
	}

	deleteFriend(id) {
		axios
			.delete(`http://localhost:5000/friends/${id}`)
			.then(res => this.setState({ friends: res.data }))
			.catch(err => { throw new Error(err)});
	}

	render() {
		return (
			<div>
				<h1>Friends list</h1>
				<Switch>
					<Route path="/" exact render={() => <Friends friends={this.state.friends} editFriend={this.setUser} deleteFriend={this.deleteFriend} />} />
				</Switch>

				<FriendForm id={this.state.id} update={this.state.update} updateForm={this.updateFriend} submitForm={this.addNewFriend} />
			</div>
		);
	}
}

export default App;
