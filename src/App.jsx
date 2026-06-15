import { useState, useEffect } from 'react'
import './App.css'
import AddTodo from './Component/AddTodo'
import TodoList from './Component/TodoList'
import Footer from './Component/Footer'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos
      ? JSON.parse(savedTodos)
      : [];
  })

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

  function handleEditTodo(id, newText) {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id
          ? { ...todo, text: newText }
          : todo
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

  useEffect(() => {
    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );
  }, [todos])

  return (
    <>
      <div className="app-container">
        <h1>Todo | App</h1>

        <AddTodo onAddTodo={handleAddTodo} />

        <div className="filters">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}>All</button>
          <button
            className={filter === "active" ? "active" : ""}
            onClick={() => setFilter("active")}>Active</button>
          <button
            className={filter === "completed" ? "active" : ""}
            onClick={() => setFilter("completed")}>Completed</button>
        </div>

        <TodoList
          todos={filteredTodos}
          onDeleteTodo={handleDeleteTodo}
          handleToggleComplete={handleToggleComplete}
          handleEditTodo={handleEditTodo} />
      </div>

      <Footer />
    </>
  )
}

export default App