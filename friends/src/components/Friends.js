import React from 'react';
import Friend from './Friend';

const Friends = props => {
	return (
		<div>
			{props.friends.map((elem, i) => <Friend key={i} friend={elem} />)}
		</div>
	);
}

export default Friends;
