import React, { useState } from 'react';

const FriendForm = props => {
    const [user, setUser] = useState({ name: "", email: "", age: -1 });
    const id = props.id;
	return (
		<form onSubmit={(e) => {e.preventDefault(); setUser({ name: "", email: "", age: 0 })}}>
            <input type="text" name="name" placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} value={user.name} />
            <input type="email" name="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} />
            <input type="number" name="age" placeholder="Age" onChange={(e) => setUser({ ...user, age: Number(e.target.value) })} value={user.age} />
            {props.update ? <input type="submit" onClick={() => props.updateForm({...user, id})} /> :  <input type="submit" onClick={() => props.submitForm(user)} />}
        </form>
	);
}

export default FriendForm;
