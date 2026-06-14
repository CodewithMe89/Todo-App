function TodoItem({ todo, onDeleteTodo }) {

    function handleDeleteTodo(){
        onDeleteTodo(todo.id)
    }

    return (
        <>
            <div>
                <h3>{todo.text}</h3>
                <button onClick={handleDeleteTodo}>Delete</button>
            </div>
        </>
    )
}
export default TodoItem