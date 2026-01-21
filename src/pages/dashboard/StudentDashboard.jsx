import React from 'react'
import PostCard from '../../components/dashboard/PostCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllPosts } from '../../redux/operations/postAPI'

const StudentDashboard = () => {

  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch])

  if(loading) return <p>Loading...</p>
  
  return (
    <div className='flex flex-col gap-3'>
      {
        posts.map(post => (
          <PostCard key={post._id} post={post}/>
        ))
      }
    </div>
  )
}

export default StudentDashboard