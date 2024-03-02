import React from 'react'
import { useAuthContext } from '../../Context/AuthContext'
import { extractTime } from '../../utils/time'
import useConversation from '../../Store/useConversation'

const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const fromauthuser = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt)
  const chat = fromauthuser ? "chat-end" : "chat-start";
  const profilePic = fromauthuser ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromauthuser ? "bg-blue-500" : "";
  return (
    <div className={`chat ${chat} `}>
    <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
            <img alt='Tailwind CSS chat bubble component' src={profilePic} />
        </div>
    </div>
    <div className={`chat-bubble text-white ${bubbleBgColor}  pb-2`}>{message.message}</div>
    <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
</div>
  )
}

export default Message



	