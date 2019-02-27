import React, { useState } from 'react';

const NewFriend = props => {
    const [user, setUser] = useState({ name: "", email: "", age: "" });

	return (
		<form>
            <input name="name" placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
            <input name="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <input name="age" placeholder="Age" onChange={(e) => setUser({ ...user, age: e.target.value })} />
        </form>
	);
}

export default NewFriend;
