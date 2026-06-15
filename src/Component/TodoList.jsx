import TodoItem from './TodoItem'

function TodoList({ todos, onDeleteTodo, handleToggleComplete, handleEditTodo }) {
    return (
        <ul className="todo-list">
            {
                todos.length === 0
                    ? <p className="no-todos">No todos yet.</p>
                    : todos.map(todo => (
                        <li key={todo.id}>
                            <TodoItem
                                todo={todo}
                                onDeleteTodo={onDeleteTodo}
                                handleToggleComplete={handleToggleComplete}
                                handleEditTodo={handleEditTodo}
                            />
                        </li>
                    ))}
        </ul>
    )
}
export default TodoList