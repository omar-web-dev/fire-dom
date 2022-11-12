import React from 'react';

const Home = () => {
    const [user, setUser] = useStart({})
    const handelSubmitData = (e) => {
        console.log('successfully submit your data')
        const value = e.target.value
        const felidName = e.target.name
        console.log(value, felidName);
    }


    const handelAddUsers =(e) => {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handelAddUsers}>
                <input onBlur={handelSubmitData} type="text" name='name' id='name' placeholder='enter your name'/><br />
                <input onBlur={handelSubmitData} type="email" name='email' id='email' placeholder='enter email email'/><br />
                <input onBlur={handelSubmitData} type="password" name='password' id='password' placeholder='enter your password'/><br />
            </form>
            
        </div>
    );
};

export default Home;