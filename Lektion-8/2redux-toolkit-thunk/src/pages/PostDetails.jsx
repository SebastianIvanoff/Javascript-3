import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { clearPost, getPostById, singlePostSlice } from '../features/Posts/singlePostSlice'


const PostDetails = () => {



  const dispatch = useDispatch()
  const {id} = useParams()

  useEffect(() => {
    dispatch(getPostById(id))

    return () => {
      dispatch(clearPost())
    }
  }, [])


  const { post, error, loading } = useSelector(state => state.singlePost)

  if(error) {
    return (
      <div>
        <h2>{error}</h2>
      </div>
    )
  }

  return (
    <>
     { loading && <p>Loading...</p> }
     {  post &&
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
     </div>}
    </>
  )
}

export default PostDetails

