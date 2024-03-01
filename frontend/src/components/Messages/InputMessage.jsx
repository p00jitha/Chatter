import React, { useState } from 'react'
import { BsSend } from "react-icons/bs";
import InputEmoji from 'react-input-emoji'
import useSendMessage from "../../Hooks/useSendMessage";
import '../../App.css'
const InputMessage = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	function handleOnEnter(e) {
		setMessage(e.target.value);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};


	return (
		<>
			<form className='px-8 my-4' onSubmit={handleSubmit}>
				<div  style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
					<InputEmoji
						type='text'
						placeholder='Send a message'
						value={message}
						onChange={setMessage}
						cleanOnEnter
						onEnter={handleOnEnter}
					/>
						<button type='submit' className='absolute inset-y-100 end-0  flex items-center pe-2' style={{marginTop:'10px',height:'40px',borderRadius:'50px',backgroundColor:'darkblue',padding:'12px'}} >
							{loading ? <div className='loading loading-spinner'></div> : <BsSend />}
						</button>
				</div>
			</form>
		</>
	)
}

export default InputMessage
