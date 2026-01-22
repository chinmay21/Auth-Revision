import React from 'react'

const PostCard = ({ post }) => {
  const autoGrow = (e) => {
  e.target.style.height = "auto";
  e.target.style.height = e.target.scrollHeight + "px";
};
  return (
    <div className='text-white'>
        <div className='flex flex-col items-center bg-blue-500 lg:w-[45%] rounded-xl mx-auto mt-5 lg:min-h-150 py-5 justify-evenly'>
            <h2 className='text-4xl font-orbitron'>{post.title}</h2>
            <p className='text-lg font-orbitron'>{post.content}</p>
            <span className='text-sm'>By {post.user.name}</span>
            <div className='bg-white opacity-65 flex justify-center items-center gap-3 px-5 rounded-lg'>
              <button className='bg-black'>Add comment</button>
              <textarea  onInput={autoGrow} className='text-blue-600 overflow-hidden outline-none resize-none mt-4'></textarea>
            </div>
        </div>
    </div>
  )
}

export default PostCard