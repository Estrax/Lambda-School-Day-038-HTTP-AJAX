import React from 'react';

const Friend = props => {
	let friendUser = props.friend;

	return (
		<div className="friend">
			{Object.keys(friendUser).map((elem, i) => <p key={i}>{elem}: {friendUser[elem]}</p>)}
			<button onClick={(e) => props.editFriend(friendUser.id)}>EDIT</button>
			<button onClick={() => props.deleteFriend(friendUser.id)}>DELETE</button>
		</div>
	);
}

export default Friend;
