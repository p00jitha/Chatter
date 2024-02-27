import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import useForgotpw from '../../Hooks/useForgotpw';
const ForgotPassword = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { loading, forgotPW } = useForgotpw();
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        await forgotPW(username,password,confirmPassword)
        
    };

    return (
        <div>
            <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
                <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                    <h1 className='text-3xl font-semibold text-center text-gray-300'>
                        Change Password
                    </h1>

                    <form onSubmit={handleSubmit}>

                        <div>
                            <label className='label p-2 '>
                                <span className='text-base label-text text-white'>Username</span>
                            </label>
                            <input type='text' placeholder='Username' className='w-full input input-bordered h-10 text-black'
                                value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div>
                            <label className='label'>
                                <span className='text-base label-text text-white'>Password</span>
                            </label>
                            <input
                                type='password'
                                placeholder='Enter Password'
                                className='w-full input input-bordered h-10 text-black'
                                value={password} onChange={(e) => setPassword(e.target.value)}
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
                                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Change Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
