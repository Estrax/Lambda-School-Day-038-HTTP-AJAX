import React from 'react';
import { Link } from 'react-router-dom';

const Friend = props => {
	let friendUser = props.friend;

	return (
		<div>
			{Object.keys(friendUser).map((elem, i) => <p key={i}>{elem}: {friendUser[elem]}</p>)}
			<Link to={`/edit`}>EDIT</Link>
			<button onClick={() => props.deleteFriend(friendUser.id)}>DELETE</button>
		</div>
	);
}

export default Friend;
