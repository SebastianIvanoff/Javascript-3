import React, { useState } from 'react'

const AddCustomerForm = () => {

    const [customerName, setCustomer] = useState('')

    const handleSubmit
  return (
    <form className='text-center'>
        <h2>Add Customer</h2>
        <div className='input-group'>
            <input type="text" className='form-control' placeholder='Enter Customer Name'/>
        <button className='btn btn-primary'>add</button>
        </div>
    </form>
  )
}

export default AddCustomerForm