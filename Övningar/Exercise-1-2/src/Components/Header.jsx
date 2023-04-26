import {useState} from 'react'

const Header = () => {

    const title = 'Jingos sida'

    const [loggedin, setloggedin] = useState(false)

  return (
    <nav className='nav'>
<h1>{title}</h1>

<button onClick={() => setloggedin(state => !state)}>{loggedin ? 'Sebbe' : 'Logga in'}</button>
    </nav>
  )
}

export default Header