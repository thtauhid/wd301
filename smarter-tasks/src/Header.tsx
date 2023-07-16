import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");

    navigate("/signin");
  };

  return (
    <nav className='bg-gray-800 py-4'>
      <div className='mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='flex items-center w-1/3'>
            {/* <Link to='/' className='ml-6 text-gray-300 hover:text-white'>
              Home
            </Link>
            <Link to='/tasks' className='ml-6 text-gray-300 hover:text-white'>
              Tasks
            </Link> */}
          </div>
          <div className='flex items-center w-1/3 justify-center'>
            <h1 className='text-white text-lg font-bold'>Smarter Tasks</h1>
          </div>
          <div className='flex items-center w-1/3 justify-end'>
            <button
              className='ml-6 text-gray-300 hover:text-white'
              onClick={handleSignOut}
              id='logout-link'
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
