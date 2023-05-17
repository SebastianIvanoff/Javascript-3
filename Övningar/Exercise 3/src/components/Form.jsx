import React from 'react'

const Form = () => {
  return (
   <form noValidate className='form-group'>
    <label htmlFor="todo" className='form-label'>Todo</label>
    <input type="text" className='form-control'/>
    <button className='btn'>Submit</button>
   </form>
  )
}

export default Form