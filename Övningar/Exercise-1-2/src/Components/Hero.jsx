import React from 'react'

const Hero = () => {

    const handleClick = () => {
        console.log('Du tryckte på knappen')
    }

  return (
    <div className='Hero'>
<h2>Hero Section</h2>
<button onClick={handleClick}>Call To Action</button>
    </div>
  )
}

export default Hero