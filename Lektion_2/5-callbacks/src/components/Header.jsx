import React from 'react'

const Header = ({title}) => {
  return (
    <div className='bg-primary p-3 text-center text white'>
        <h1>{title}</h1>
    </div>
  )
}

export default Header