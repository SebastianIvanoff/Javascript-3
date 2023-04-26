import React from 'react'
import { useState } from 'react'

const FormThree = () => {


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const user = {
        firstName: 'Sebbe',
        lastName: 'Ivanoff'
    }

    const newUser = {
        ...user,
        lastName: 'Jimenez'
    }

    const handleChange = e => {
        setFormData(data => {
            return{
                ...data,
                [e.target.name]: e.target.value
            }
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
    }
  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input 
        type="text" 
        name='firstName' 
        id='firstName' 
        className='form-control' 
        value={formData.firstName}
        onChange={handleChange}
       />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name='lastName' id='lastName' className='form-control' value={formData.lastName} onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name='email' id='email' className='form-control' value={formData.email} onChange={handleChange}/>
      </div>
      <button>Submit</button>
    </form>
  )
}

export default FormThree