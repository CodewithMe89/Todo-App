import TodoItem from './TodoItem'

function TodoList({ todos, onDeleteTodo }) {
    return (
        <>
            {
                todos.length === 0
                    ? <p>No todos yet.</p>
                    : todos.map(todo => (
                        <div key={todo.id}>
                            <TodoItem
                                todo={todo}
                                onDeleteTodo={onDeleteTodo}
                            />
                        </div>
                    ))}
        </>
    )
}
export default TodoList