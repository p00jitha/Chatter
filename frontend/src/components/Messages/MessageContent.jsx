import React,{useEffect} from 'react'
import Messages from './Messages'
import InputMessage from './InputMessage'
import { TiMessages } from "react-icons/ti";
import useConversation from "../../Store/useConversation";
import {useAuthContext} from '../../Context/AuthContext'

const MessageContent = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

  return (
    <div className='md:min-w-[450px] flex flex-col'>
        {selectedConversation? (<>
 				<div className='bg-slate-500 px-4 py-2 mb-2'>
 					<span className='label-text'>To:</span> 
          <span className='text-gray-900 font-bold'>{selectedConversation.username}</span>
 				</div>
        <Messages/>
        <InputMessage/>
 			</>): (<NoChatSelected/>)}
    </div>
  )
}

export default MessageContent

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
        <>
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Hello 👋 {authUser.username} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
        </>
	);
};