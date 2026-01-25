import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { toast } from 'react-toastify';
import { createComment, deleteComment } from '../../redux/operations/commentAPI';
import { FaArrowCircleUp } from "react-icons/fa";

const PostCard = ({ post }) => {
  const autoGrow = (e) => {
  e.target.style.height = "auto";
  e.target.style.height = e.target.scrollHeight + "px";
};
  const [commentText, setCommentText] = useState("");
  const [showAllComments, setShowAllComments] = useState(false);
  const dispatch = useDispatch();

  const clickHandler = () => {
    if(!commentText.trim()) return;

    dispatch(createComment({postId: post._id, content: commentText}));

    setCommentText("")
    toast.success("Comment added successfully");
  };

  const handleDeleteComment = (commentId) => {
    dispatch(deleteComment(commentId));
    toast.success("Comment deleted");
  };
  const visibleComments = showAllComments
    ? post.comments
    : post.comments.slice(0, 1);

  return (
    <div className='text-white'>
        <div className='flex flex-col items-center bg-blue-500 lg:w-[45%] rounded-xl mx-auto mt-5 lg:min-h-150 py-5 justify-evenly'>
            <h2 className='text-4xl font-orbitron'>{post.title}</h2>
            <p className='text-lg font-orbitron'>{post.content}</p>
            <span className='text-sm'>By {post.user.name}</span>

            {/* Comments */}
            <div>
              {
                post.comments.length === 0 ? (
                  <p>No comments yet</p>
                ) : (
                  <>
                    {visibleComments.map((comment) => (
                      <div
                      key={comment._id}
                      className=''
                      > 
                        <p>{comment.content}</p>
                        <span>By {comment.user?.name}</span>
                        <button onClick={() => handleDeleteComment(comment._id)} className='ml-5 cursor-pointer'>Delete Comment</button>
                      </div>
                    ))}

                    {/* Show all button */}
                    {post.comments.length > 1 && !showAllComments && (
                      <p
                      onClick={() => setShowAllComments(true)}
                      className='cursor-pointer'
                      >
                        Show all comments ({post.comments.length})
                      </p>
                    )}
                  </>
                )
              }
            </div>
            <div className='bg-white opacity-65 flex justify-center items-center gap-3 px-5 rounded-lg'>
              <textarea value={commentText} onChange={(e) => setCommentText(e.currentTarget.value)} onInput={autoGrow} className='text-blue-600 overflow-hidden outline-none resize-none mt-4'></textarea>
              <button onClick={clickHandler} className='cursor-pointer'><FaArrowCircleUp className='text-indigo-500' size={30} /></button>
            </div>
        </div>
    </div>
  )
}

export default PostCard