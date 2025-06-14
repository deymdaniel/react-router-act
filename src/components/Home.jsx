import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='home-container flex flex-col items-center  min-h-screen bg-gray-100'>
      <h2 className='text-2xl font-bold mb-4'>Home Page</h2>
      <nav className='mb-4'>
        <Link to='/about' className='text-blue-500 hover:underline'>
          About Us
        </Link>{" "}
        |{" "}
        <Link to='/contact' className='text-blue-500 hover:underline'>
          Contact Us
        </Link>
      </nav>
      <p>Welcome to my website!</p>
    </div>
  );
}

export default Home;
