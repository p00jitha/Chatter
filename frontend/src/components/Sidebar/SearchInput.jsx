import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../Store/useConversation'
import useGetConversations from '../../Hooks/useGetConversation'
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  function handleSubmit() {
    e.preventDefault();
    if (!search) {
      return;
    }
    const conversation = conversations.find((c) => c.username.toLowerCase().includes(search.toLowerCase()))
    .catch((err)=>console.log(err))
    console.log(conversation)

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else 
    {
      toast.error("No such user found!");
    }
  }

  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
      <input type='text' placeholder='Search…' className='input input-bordered rounded-full text-black'
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <FaSearch className='w-6 h-6 outline-none' />
      </button>
    </form>
  )
}

export default SearchInput
