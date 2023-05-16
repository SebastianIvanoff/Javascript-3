import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {

  const [todos, setTodos] = useState([])
  const [counter, setCounter] = useState('')
  

useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(res => {
    console.log(res.data)
    setTodos(res.data)
  })
}, [])

// useEffect(() => {
//   consol.log('Clicked on the counter' + counter)
 
// }, [counter])


  return (
    <div>
      {/* <h1 onClick={() => setCounter(count => count+1)}>{counter}</h1> */}
    </div>
  )
}

export default App