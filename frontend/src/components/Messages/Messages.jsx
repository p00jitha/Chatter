import React,{useEffect,useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../Hooks/useGetMessages'
import LoadingTemp from '../LoadingTemp/LoadingTemp'
import useListenMessages from '../../Hooks/useListenMessages'
const Messages = () => {
	const {messages,loading} = useGetMessages()
	useListenMessages();
	const lastMessageRef = useRef();
	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
  return (
    <div className='px-4 flex-1 overflow-auto'>
 			 {!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}

			{loading && [...Array(4)].map((_, idx) => <LoadingTemp key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
 	</div>
  )
}

export default Messages
