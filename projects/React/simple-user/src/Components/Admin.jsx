import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Admin = () => {
    const users = useLoaderData()
    console.log(users, "users")
    return (
        <div>
            
        </div>
    );
};

export default Admin;