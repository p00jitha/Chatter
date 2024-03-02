import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../Store/useConversation'
import useGetConversations from '../../Hooks/useGetConversation'
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const { setSelectedConversation } = useConversation();
  const { conversation } = useGetConversations();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) {
      return;
    }
    const Conversations = conversation.find((c) => c.username.toLowerCase().includes(search.toLowerCase()))
    if (Conversations) {
      setSelectedConversation(Conversations);
      setSearch("");
    } else {
      toast.error("No such user found!");
    }
  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2' >
      <input type='text'
        placeholder='Search…'
        className='input input-bordered rounded-full text-black'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <FaSearch className='w-6 h-6 outline-none' />
      </button>
    </form>
  )
}

export default SearchInput
