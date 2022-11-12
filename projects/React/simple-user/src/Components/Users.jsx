import React, { useState } from 'react';

const User = ({ user, users }) => {
const [displayUsers, setDisplayUsers] = useState(users)
    const handelRemoveItem = () => {
        const deleteUser = window.confirm('deleted this user', user.name)
        if (deleteUser) {
            fetch(`http://localhost:5000/users/${user._id}`, {
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deleteCount > 0){
                    alert('successfully deleted a user')
                }
                console.log(data)
            })
        }
    }
    return (
        <div>
            <div>
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
                <button onClick={handelRemoveItem}>X</button>
            </div>
        </div>
    );
};

export default User;