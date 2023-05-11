import { useState } from 'react'
import './CreatePostForm.css'
import { useNavigate } from 'react-router-dom'

const CreatePostForm = ({ addPost }) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


    const navigate = useNavigate()

    const handleSub = e => {
        e.preventDefault()


        addPost(title, body)

    }
  return (
    <form className='create-post' onSubmit={handleSub}>
      <div className="form-group">
        <label htmlFor="title" className="input-label">Title: </label>
        <input type="text" className="form-control" name='title' id='title' value={title} onChange={e => setTitle(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="title" className="input-label">Body: </label>
        <textarea name="body" id="body" className='form-control' value={body} onChange={e => setBody(e.target.value)}></textarea>
      </div>
      <button className='btn btn-primary'>Create Post</button>
    </form>
  )
}

export default CreatePostForm