import React from 'react'
import Message from './Message'
import useGetMessages from '../../Hooks/useGetMessages'
const Messages = () => {
	const {messages,loading} = useGetMessages()
	console.log(messages)
  return (
    <div className='px-4 flex-1 overflow-auto'>
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 		</div>
  )
}

export default Messages
