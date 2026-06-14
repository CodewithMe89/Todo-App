import { useState } from 'react'
import AddTodo from './Component/AddTodo'
import TodoList from './Component/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  function handleAddTodo(newTodo){
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  function handleDeleteTodo(id){
    setTodos(
      prevTodos => prevTodos.filter(target => target.id !== id)
    )
  }

  return (
    <>
      <h1>Todo | App</h1>

      <AddTodo onAddTodo={handleAddTodo}/>

      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </>
  )
}

export default App