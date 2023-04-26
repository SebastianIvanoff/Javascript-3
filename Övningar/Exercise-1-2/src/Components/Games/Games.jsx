import {useState} from 'react'
import './Games.css'

const Games = ({games}) => {

    const [isDark, setisDark] = useState(false)

  return (
    <div className='Games'>
        <div className={`card mb-1 ${isDark ? 'dark' : ''}`}>
        <h2>{games.title}</h2>
        <p>{games.body}</p>
        <button onClick={() => setisDark(prev => !prev)}>{isDark ? 'Light' : 'Dark'}</button>
        </div>
    </div>
  )
}

export default Games