import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserPosts } from '../../redux/operations/postAPI'
import InstructorPostCard from '../../components/dashboard/InstructorPostCard'
import CreatePostModal from '../../components/modal/CreatePostModal'
import { useEffect } from 'react'

const InstructorDashboard = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.post);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  console.log(open);
  useEffect(() => {
    dispatch(fetchUserPosts());
  }, [dispatch])

  if(loading) return <p>Loading...</p>
  return (
    <div>
      {
        posts.map(post => (
          <InstructorPostCard key={post._id} post={post}/>
        ))
      }
      <>
        <button onClick={handleOpen} className='text-indigo-700 w-50 bg-[#CDAC79] py-2 rounded-lg hover:shadow-lg
         hover:shadow-blue-200 transition-all ease-in hover:scale-105 delay-100 font-semibold fixed top-10 left-300 cursor-pointer'>
          Create Post
        </button>
        <CreatePostModal isOpen={open} onClose={handleClose}/>
      </>
    </div>
  )
}

export default InstructorDashboard