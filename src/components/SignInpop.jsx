import React, { useState } from 'react';

const SignInpop = ({ title, setTitle, setIsModalOpen }) => {
  const handleClose = () => {
    setIsModalOpen(false); // Close the modal when clicked outside or on the close button
  };

  return (
    <div className="absolute z-50 inset-0 bg-gray-600 bg-opacity-25 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <button
          onClick={handleClose}
          className="absolute top-[50px] right-[400px] text-xl font-bold"
        >
          X
        </button>
        
        <form>
          {title === "Sign in" ? (
            <>
              <h2 className="text-2xl mb-4">Sign In</h2>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="mb-2 w-60 p-2 border border-gray-300 rounded"
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="mb-2 w-60 p-2 border border-gray-300 rounded"
              />
              <div className="flex gap-3">
                <input type="checkbox" required />
                <p className='font-normal text-neutral-500'>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
              <button className='mb-2 mt-5 p-2 border bg-blue-500 rounded-full items-center w-52 hover:outline'>Submit</button>
              <button
                type="button"
                onClick={() => setTitle("Sign up")} // Change title to "Sign up" when clicked
                className="mt-4 w-60 text-blue-600"
              >
                Don't have an account? Sign up
              </button>
            </>
          ) : (
            <>
              <h2 className="text-2xl mb-4">Sign Up</h2>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="mb-2 w-60 p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="mb-2 w-60 p-2 border border-gray-300 rounded"
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="mb-2 w-60 p-2 border border-gray-300 rounded"
              />
              <div className="flex gap-3">
                    <input type="checkbox" required />
                    <p className='font-normal text-neutral-500'>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
              <button className='mb-2 mt-5 p-2 border bg-blue-500 rounded-full items-center w-52 hover:outline'>Submit</button>
              <button
                type="button"
                onClick={() => setTitle("Sign in")} // Change title to "Sign in" when clicked
                className="mt-4 text-blue-600"
              >
                Already have an account? Sign in
              </button>
            </>
          )}
          
        </form>
      </div>
    </div>
  );
};

export default SignInpop;
