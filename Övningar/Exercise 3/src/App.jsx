
import { useState, useEffect } from 'react'
import TodoItem from './components/TodoItem'
import Form from './components/Form'

const App = () => {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await res.json()
      setTodos(data)
      console.log(data)
    }

    getTodos()

  }, []) 

  useEffect(() => {
    console.log('todo ändrades')
  }, [todos]) 


  const removeTodo = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }

  return (
    <div className='wrapper'>
      <Form />
      {
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))
      }
    </div>
  )
}

export default App