import { useState, useEffect } from 'react'
import axios from 'axios'


const TodoList = () => {

    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')

    const addTodo = () => {
        if (inputValue !== '') {
            setTodos([...todos, { title: inputValue, completed: false }])
            setInputValue('')
        }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addTodo()
        }
    }

    useEffect(() => {
        const fetchTodos = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
            const data = res.data.map((todo) => ({ title: todo.title, completed: todo.completed }))
            setTodos(data)
        }
        fetchTodos()
    }, [])

    return (
        <div className="todo-list-container">
            <h1 className="todo-list-title">Todo List</h1>
            <div className="input-container">
                <input
                    className="input-field"
                    type="text"
                    placeholder="Enter a todo item"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <button className="add-button" onClick={addTodo}>Add</button>
            </div>
            <div className="todos-container">
                {todos.map((todo, index) => (
                    <div key={index} className="todo-item">{todo.title}</div>
                ))}
            </div>
        </div>
    );

}

export default TodoList;
