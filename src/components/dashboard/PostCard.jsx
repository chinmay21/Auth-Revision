import React from 'react'

const PostCard = ({ post }) => {
  return (
    <div>
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    </div>
  )
}

export default PostCard