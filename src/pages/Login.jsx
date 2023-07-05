import React, { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { AuthContext } from '../contexts/AuthContext';
import { loginCall } from './apiCalls';

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, dispatch, isFetching } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmitLog(e) {
    e.preventDefault();
    loginCall({ email: email.current.value, password: password.current.value }, dispatch);
  }

  console.log(user);

  return (
    <div className="flex justify-center items-center h-[600px] bg-gray-100">
      <div className="w-[500px] p-8 bg-white shadow">
        <form className="space-y-4" onSubmit={handleSubmitLog}>
          <input
            placeholder="Email"
            required
            type="email"
            ref={email}
            minLength="6"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            placeholder="Password"
            required
            type="password"
            ref={password}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full p-2 font-semibold bg-cyan-500 text-white rounded disabled:bg-gray-500 disabled:cursor-not-allowed hover:shadow-lg"
            disabled={isFetching}
          >
            {isFetching ? <CircularProgress color="white" size="20px" /> : 'Log In'}
          </button>
          <button
            type="button"
            className="w-full p-2 font-semibold bg-gray-500 text-white rounded disabled:bg-gray-500 disabled:cursor-not-allowed hover:shadow-lg"
            onClick={() => navigate('/register')}
          >
            {isFetching ? <CircularProgress color="white" size="20px" /> : 'Create a New Account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
