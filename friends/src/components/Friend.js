import React from 'react';

const Friend = props => {
	return (
		<div>
			<p>{props.friend.id} - {props.friend.name} - {props.friend.age} - {props.friend.email}</p>
		</div>
	);
}

export default Friend;
