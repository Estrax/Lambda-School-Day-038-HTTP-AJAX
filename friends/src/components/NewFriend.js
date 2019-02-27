import React, { useState } from 'react';

const NewFriend = props => {
    const [user, setUser] = useState({ name: "", email: "", age: "" });
    console.log(user);
	return (
		<form onSubmit={(e) => e.preventDefault()}>
            <input name="name" placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
            <input name="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <input name="age" placeholder="Age" onChange={(e) => setUser({ ...user, age: e.target.value })} />
            <input type="submit" onClick={(e) => props.submitForm(e, user)} />
        </form>
	);
}

export default NewFriend;
