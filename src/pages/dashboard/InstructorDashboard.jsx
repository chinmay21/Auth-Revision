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
          <InstructorPostCard key={post._id} postId={post._id}/>
        ))
      }
      <>
        <button onClick={handleOpen} className='text-red-600 lg:-translate-y-763.5 lg:translate-x-320 cursor-pointer'>Create Post</button>
        <CreatePostModal isOpen={open} onClose={handleClose}/>
      </>
    </div>
  )
}

export default InstructorDashboard