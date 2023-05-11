import {useState} from 'react'
import FormInput from './FormInput'

const Form = () => {


        const [ errors, setErrors] = useState({})

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password:'',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setForm(formData => {
            return{
                ...formData,
                [id]: value
            }
        })
    }

    const validate = () => {
        const err = {}

        if(form.firstName.trim() === ''){
            err.firstName = 'You need to enter a name'
        } else if (form.firstName.length < 3) {
            err.firstName = 'Too short'
        }

        if(form.lastName.trim() === ''){
            err.lastName = 'You need to enter a name'
        } else if (form.lastName.length < 3) {
            err.lastName = 'Too short'
        }

        console.log(err)
        setErrors()
    }

    const handleSubmit = e => {
        e.preventDefault()

        validate()
    }


  return (
    <form noValidate>
      <FormInput 
        id='firstName' 
        type="text" 
        label="First Name"  
        value={form.firstName}
        onChange={handleChange} 
        errorMsg={errors.firstName}
      />
      <FormInput 
        id='lastName' 
        type="text" 
        label="Last Name"   
        value={form.lastName}
        onChange={handleChange}
        errorMsg={errors.lastName}
      />
      <FormInput 
        id='email' 
        type="email" 
        label="Email"  
        value={form.email}
        onChange={handleChange} 
        errorMsg={errors.email}
      />
      <FormInput 
        id='password' 
        type="password" 
        label="Password"  
        value={form.password}
        onChange={handleChange}
        errorMsg={errors.password}
      />
      <FormInput 
        id='confirmPassword' 
        type="password" 
        label="Confirm Password"  
        value={form.confirmPassword}
        onChange={handleChange} 
        errorMsg={errors.confirmPassword}
      />



      
      <button className="btn btn-primary">Register</button>
      
    </form>
  )
}

export default Form





{/* <FormInput 
        id='age' 
        type="text" 
        label="Age"
        pattern="/[0-9]*$"
        in 
      /> */}