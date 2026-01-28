import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserPosts } from '../../redux/operations/postAPI'
import { useEffect } from 'react'

const InstructorDashboard = () => {
  const dispatch = useDispatch();
  const { userPosts, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchUserPosts());
  }, [dispatch])

  if(loading) return <p>Loading...</p>
  return (
    <div>

    </div>
  )
}

export default InstructorDashboard