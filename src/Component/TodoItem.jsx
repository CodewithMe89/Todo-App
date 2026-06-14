function TodoItem({ todo, onDeleteTodo }) {

    function handleDeleteTodo(){
        onDeleteTodo(todo.id)
    }

    return (
        <>
            <div>
                <input type="checkbox" />
                <h3>{todo.text}</h3>
                <button onClick={handleDeleteTodo}>Delete</button>
            </div>
        </>
    )
}
export default TodoItem