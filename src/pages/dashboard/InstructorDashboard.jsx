import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserPosts } from '../../redux/operations/postAPI'
import InstructorPostCard from '../../components/dashboard/InstructorPostCard'
import { useEffect } from 'react'

const InstructorDashboard = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.post);

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
    </div>
  )
}

export default InstructorDashboard