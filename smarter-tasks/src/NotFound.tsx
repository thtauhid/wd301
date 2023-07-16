import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='mt-8 flex flex-col'>
      <h1 className='text-2xl font-bold text-center'>
        Error 404 Page Not Found
      </h1>
      <div className='text-center mt-4'>
        <button
          id='backToHomeButton'
          className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;
