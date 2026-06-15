import { useState } from 'react'
import AddTodo from './Component/AddTodo'
import TodoList from './Component/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const [filter, setFilter] = useState("all")

  function handleAddTodo(newTodo) {
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  function handleDeleteTodo(id) {
    setTodos(
      prevTodos => prevTodos.filter(target => target.id !== id)
    )
  }

  function handleToggleComplete(id) {
    setTodos(prevTodos =>
      prevTodos.map(target =>
        target.id === id
          ? { ...target, completed: !target.completed }
          : target
      )
    )
  }

  let filteredTodos;

  if (filter === "active") {
    filteredTodos = todos.filter(todo => !todo.completed)
  }
  else if (filter === "completed") {
    filteredTodos = todos.filter(todo => todo.completed)
  }
  else {
    filteredTodos = todos
  }
  return (
    <>
      <h1>Todo | App</h1>

      <AddTodo onAddTodo={handleAddTodo} />

      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>

      <TodoList 
      todos={filteredTodos} 
      onDeleteTodo={handleDeleteTodo} 
      handleToggleComplete={handleToggleComplete} />
    </>
  )
}

export default App