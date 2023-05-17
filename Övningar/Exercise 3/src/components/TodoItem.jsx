import { useEffect, useState } from 'react'

const TodoItem = ({todo, removeTodo}) => {

    const [isDark, setTisDark] = useState(false)

  return (
    <div className={`todo ${isDark ? 'dark' : ''}` } onClick={() => setTisDark(prev => !prev)}>{todo.title}</div>
  )
}

export default TodoItem