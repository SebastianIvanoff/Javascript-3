import React from 'react'

const Formtwo = () => {

    
  return (
    <form noValidate onSubmit={handleSubmit}>
    <div className='form-group'>
    <label htmlFor="firstName">First Name</label>
    <input type="text" name='firstName' id='firstName' className='Form-control' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
    </div>
    <div className='form-group'>
    <label htmlFor="lastName">last Name</label>
    <input type="text" name='lastName' id='lastName' className='Form-control' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
    </div>
    <div className='form-group'>
    <label htmlFor="email">Email</label>
    <input type="text" name='email' id='email' className='Form-control' value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <button>Submit</button>
    </form>
  )
}

export default Formtwo