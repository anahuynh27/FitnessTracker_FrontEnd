import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
      <div className='flex items-center'>
        <Link to='/home'>
          <span className='font-serif text-4xl'>fitness trackr</span>
        </Link>
      </div>
      <div className='flex justify-end flex-1 mr-auto'>
        <Link to='/home' className='active:text-pink-500'>
          <button className='m-2 font-serif text-xl hover:text-pink-500 focus:text-pink-500'>
            home
          </button>
        </Link>
        <Link to='/activities' className='active:text-pink-500'>
          <button className='m-2 font-serif text-xl hover:text-pink-500 focus:text-pink-500'>
            activities
          </button>
        </Link>
        <Link to='/routines' className=' active:text-pink-500'>
          <button className='m-2 font-serif text-xl  hover:text-pink-500 focus:text-pink-500'>
            routines
          </button>
        </Link>
      </div>
      <div className='flex items-center justify-end flex-1'>
        <Link to='/login' className=' active:text-pink-500'>
          <button className='m-2 font-serif text-xl  hover:text-pink-500 focus:text-pink-500'>
            login
          </button>
        </Link>
        <Link to='/register' className=' active:text-pink-500'>
          <button className='m-2 font-serif text-xl  hover:text-pink-500 focus:text-pink-500'>
            register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
