import React from 'react';
import Friend from './Friend';

const Friends = props => {
	return (
		<div>
			{props.friends.map((elem, i) => <Friend key={i} friend={elem} editFriend={props.editFriend} deleteFriend={props.deleteFriend} />)}
		</div>
	);
}

export default Friends;
