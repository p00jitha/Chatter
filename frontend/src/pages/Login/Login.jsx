import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import useLogin from "../../Hooks/useLogin";

const Login = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10 text-black' value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text text-white'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              className='w-full input input-bordered h-10 text-black'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{display:"flex",flexDirection:"row",gap:"50px"}}>
          <Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
            {"Don't"} have an account?
          </Link>
          <Link to='/forgotpw' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
            Forgot Password
          </Link>
          </div>
          <div>
            <button className='btn btn-block btn-sm mt-2' disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span>:"Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
