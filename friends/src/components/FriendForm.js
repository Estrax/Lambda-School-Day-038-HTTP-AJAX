import React, { useState } from 'react';

const FriendForm = props => {
    const [user, setUser] = useState({ name: "", email: "", age: "" });
	return (
		<form onSubmit={(e) => {e.preventDefault(); setUser({ name: "", email: "", age: "" })}}>
            <input name="name" placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} value={user.name} />
            <input name="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} />
            <input name="age" placeholder="Age" onChange={(e) => setUser({ ...user, age: e.target.value })} value={user.age} />
            <input type="submit" onClick={() => props.submitForm(user)} />
        </form>
	);
}

export default FriendForm;
