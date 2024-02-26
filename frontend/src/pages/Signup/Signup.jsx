import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import CheckBox from './CheckBox';
import useSignup from "../../Hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
		email: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};
  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    await signup(inputs);
  }
  return (
    <div>
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Sign Up
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text text-white'>Email</span>
              </label>
              <input type='email' placeholder='Email' className='w-full input input-bordered  h-10 text-black' value={inputs.email}
							onChange={(e) => setInputs({ ...inputs,email: e.target.value })}/>
            </div>

            <div>
              <label className='label p-2 '>
                <span className='text-base label-text text-white'>Username</span>
              </label>
              <input type='text' placeholder='Username' className='w-full input input-bordered h-10 text-black' value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}/>
            </div>

            <div>
              <label className='label'>
                <span className='text-base label-text text-white'>Password</span>
              </label>
              <input
                type='password'
                placeholder='Enter Password'
                className='w-full input input-bordered h-10 text-black' value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              />
            </div>

            <div>
              <label className='label'>
                <span className='text-base label-text text-white'>Confirm Password</span>
              </label>
              <input
                type='password'
                placeholder='Confirm Password'
                className='w-full input input-bordered h-10 text-black'
                value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              />
            </div>

             <CheckBox CheckboxChange={handleCheckboxChange} selectGender={inputs.gender}/>

            <Link className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' to='/login'>
              Already have an account?
            </Link>

            <div>
              <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
