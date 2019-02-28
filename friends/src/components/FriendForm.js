import React, { useState } from 'react';

const FriendForm = props => {
    const [user, setUser] = useState({ name: "", email: "", age: -1 });
    const id = props.id;
	return (
		<form className="card form" onSubmit={(e) => {e.preventDefault(); setUser({ name: "", email: "", age: 0 })}}>
            <h1 className="form-title">{props.update ? `Update user with ID: ${id}` : "Add new user"}</h1>
            <input type="text" name="name" placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} value={user.name} />
            <input type="email" name="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} />
            <input type="number" name="age" placeholder="Age" onChange={(e) => setUser({ ...user, age: Number(e.target.value) })} value={user.age} />
            {props.update ? <input type="submit" className="form-btn" onClick={() => props.updateForm({...user, id})} /> :  <input type="submit" className="form-btn" onClick={() => props.submitForm(user)} />}
        </form>
	);
}

export default FriendForm;
