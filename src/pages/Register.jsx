import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const username = useRef();
  const password = useRef();
  const email = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClickReg = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity('Password Does not Match');
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        console.log(user);
        await axios.post('http://localhost:5000/api/auth/register', user);
        navigate('/login');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[500px] p-8 bg-white shadow">
        <form className="space-y-4" onSubmit={handleClickReg}>
          <input
            placeholder="Username"
            required
            ref={username}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            placeholder="Email"
            required
            ref={email}
            className="w-full p-2 border border-gray-300 rounded"
            type="email"
          />
          <input
            placeholder="Password"
            required
            ref={password}
            className="w-full p-2 border border-gray-300 rounded"
            type="password"
            minLength="6"
          />
          <input
            placeholder="Password Again"
            required
            ref={passwordAgain}
            className="w-full p-2 border border-gray-300 rounded"
            type="password"
          />
          <button className="w-full p-2 font-semibold bg-cyan-500 text-white rounded hover:shadow-lg" type="submit">
            Sign Up
          </button>
          <button className="w-full p-2 font-semibold bg-gray-500 text-white rounded hover:shadow-lg" type="button" onClick={() => navigate('/login')}>
            Log into Account
          </button>
        </form>
      </div>
    </div>
  );
}
