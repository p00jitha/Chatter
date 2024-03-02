import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../Hooks/useGetConversation.js'
const Conversations = () => {
	const { loading, conversation } = useGetConversations();
  return (
      <div className='py-2 flex flex-col overflow-auto'>
			{conversation.map((person) => (
				<Conversation
					key={person._id}
					conversationperson={person}
				/>
			))}
			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
		</div>
  )
}

export default Conversations
