import React  from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Users from './Users'

const Home = () => {
    const [users, setUsers] = useState([])
    const data = useLoaderData()

    const handelSetUser = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const user = {name, email, password}
        fetch(`http://localhost:5000/users`,{ // server data send a 3 ways
            method : 'POST', // method is a post

            headers : {'content-type' : 'application/json'}, // header is a object and make sure content type application 

            body : JSON.stringify(user) // send a data in stringify
        })
        .then(res => res.json())
        .then(data => {
            
            alert('Data sent successfully  completed')
            setUsers([...users, data])
        })
    }

return (
    <div className='App'>
        <h2>Total users {data.length}</h2>
        {data.map(user => <Users key={user._id} users={data} user={user}/>)}
        <form onSubmit={handelSetUser}>
            <input type="text" name="name" id="name" placeholder='enter your name' />
            <br />
            <input type="email" name="email" id="email" placeholder='enter your email' /><br />
            <input type="password" name="password" id="password" placeholder='enter your password' />
            <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
);
};

export default Home;