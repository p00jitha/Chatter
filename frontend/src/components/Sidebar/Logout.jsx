import React from 'react'
import { BiSolidLogOut } from "react-icons/bi";
import useLogout from '../../Hooks/useLogout';
const Logout = () => {
  const {loading,logout} = useLogout();
  return (
    <div className='mt-auto'>
      {!loading ?(
        <BiSolidLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
				
		</div>
  )
}

export default Logout
