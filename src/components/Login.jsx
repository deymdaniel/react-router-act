import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const users = [
  { username: "admin", password: "admin" },
  { username: "user", password: "user" },
];

function Login({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const validUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (validUser) {
      setAuth(true);
      navigate("/home");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className='login-container flex items-center justify-center min-h-screen bg-gray-100 flex-col'>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      <form onSubmit={handleLogin} className='bg-white p-6 rounded shadow-md'>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className='border border-gray-300 p-2 mb-4 w-full'
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='border border-gray-300 p-2 mb-4 w-full'
        />
        <button
          type='submit'
          className='bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600'
        >
          Login
        </button>
        {error && <p className='text-red-500'>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
