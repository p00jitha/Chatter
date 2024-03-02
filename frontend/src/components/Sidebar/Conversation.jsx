import React from 'react'
import useConversation from "../../Store/useConversation";
import { useSocketContext } from '../../Context/socketContext';

const Conversation = ({conversationperson}) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const isSelected = selectedConversation?._id === conversationperson._id;

	const {onlineUsers} = useSocketContext()
    const isOnline = onlineUsers.includes(conversationperson._id)

  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${isSelected ? "bg-sky-500" : ""}
			`} onClick={() => setSelectedConversation(conversationperson)}>
				<div className={`avatar ${isOnline ? "online" : ""}`}>
					<div className='w-12 rounded-full'>
						<img
							src={conversationperson.profilePic}
							alt='user avatar'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{conversationperson.username}</p>
						<span className='text-xl'>😍</span>
					</div>
				</div>
			</div>

			<div className='divider my-0 py-0 h-1' />
        </>
  )
}

export default Conversation
