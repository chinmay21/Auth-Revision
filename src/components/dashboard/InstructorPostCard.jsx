import React from 'react'
import { useSelector } from 'react-redux'

const InstructorPostCard = ({ postId }) => {
  const post = useSelector(state => state.post.posts.find((p) => p._id === postId))
  return (
    <div className='text-white mb-5'>
            <div className='flex flex-col items-center bg-blue-500 lg:w-[45%] rounded-xl mx-auto mt-5 lg:min-h-150 py-5 justify-evenly'>
                <h2 className='text-4xl font-orbitron'>{post.title}</h2>
                <p className='text-lg font-orbitron'>{post.content}</p>
                <span className='text-sm'>By {post.user.name}</span>
            </div>
        </div>
  )
}

export default InstructorPostCard