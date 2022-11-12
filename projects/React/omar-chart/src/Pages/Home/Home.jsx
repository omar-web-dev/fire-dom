import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <div className='h-[100vh] relative'>
      <div className='border'>
        <div className="mt-14">
          <img src="https://i.ibb.co/6P6spfx/home.png" alt="" />
        </div>
        <div className='absolute w-full bottom-0'>
          <div className='text-center'>
            <p className=' text-[#EF5858] text-4xl'> Welcome </p>
            <p className=''>This is a best </p>
            <div className='p-10'>
              <Link to='singIn'>
                <button className="btn mb-3 w-full font-bold btn-outline btn-warning">Create Account</button>
              </Link>
              <Link to='singUp'>
                <button className="btn w-full font-bold  btn-warning">Registration</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;