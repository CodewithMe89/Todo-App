import { useState } from 'react'
function TodoItem({ todo, onDeleteTodo, handleToggleComplete, handleEditTodo }) {

    const [isEditing, setIsEditing] = useState(false)
    const [editedText, setEditedText] = useState(todo.text)

    function handleDeleteTodo() {
        onDeleteTodo(todo.id)
    }

    return (
        <>
            {isEditing
                ?
                <>
                    <input
                        type="text"
                        placeholder="Enter New Text....."
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)} />
                    <button onClick={() => {
                        if (editedText.trim() === "")
                            return

                        handleEditTodo(todo.id, editedText)
                        setIsEditing(false)}
                    }>Save</button>

                    <button onClick={() => {
                        setEditedText(todo.text)
                        setIsEditing(false)
                    }}>cancel</button>
                </>
                :
                <>
                    <input type="checkbox"
                        checked={todo.completed}
                        onChange={() => { handleToggleComplete(todo.id) }} />
                    <h3 style={{
                        textDecoration: todo.completed
                            ? "line-through"
                            : "none"
                    }}>{todo.text}</h3>

                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={handleDeleteTodo}>Delete</button>
                </>}
        </>
    )
}
export default TodoItem