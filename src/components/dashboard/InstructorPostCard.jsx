import React from 'react'

const InstructorPostCard = ({post}) => {
  return (
    <div>
        <div>
            <div>{post.title}</div>
            <div>{post.content}</div>
            <div>{post.user.name}</div>
        </div>
    </div>
  )
}

export default InstructorPostCard