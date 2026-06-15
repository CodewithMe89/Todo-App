function TodoItem({ todo, onDeleteTodo, handleToggleComplete }) {

    function handleDeleteTodo(){
        onDeleteTodo(todo.id)
    }

    return (
        <>
            <div>
                <input type="checkbox"
                checked={todo.completed} 
                onChange={() => {handleToggleComplete(todo.id)}}/>
                <h3 style={{
                    textDecoration: todo.completed
                    ? "line-through"
                    : "none"
                }}>{todo.text}</h3>
                <button onClick={handleDeleteTodo}>Delete</button>
            </div>
        </>
    )
}
export default TodoItem