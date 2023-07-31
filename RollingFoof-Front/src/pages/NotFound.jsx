import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col bg-white">
    <img
      src="https://t3.ftcdn.net/jpg/04/92/25/44/360_F_492254467_sjCtT1R6ugiwVFkEgk7kzFU6dINSALYh.jpg"
      alt=""
      className="object-cover w-full h-64"
    />
  
    <div className="flex items-center justify-center flex-1">
      <div className="max-w-xl px-4 py-8 mx-auto text-center m-6">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          We can't find that page.
        </h1>
  
        <p className="mt-4 text-gray-500">
          Try searching again, or return home to start from the beginning.
        </p>
  
        <a
          href="/home"
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-red-600 rounded hover:bg-yellow-500 focus:outline-none focus:ring"
        >
          Go Back Home
        </a>
      </div>
    </div>
  </div>
)};

export default NotFound;
