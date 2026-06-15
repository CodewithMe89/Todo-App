import { useState } from 'react'
function TodoItem({ todo, onDeleteTodo, handleToggleComplete, handleEditTodo }) {

    const [isEditing, setIsEditing] = useState(false)
    const [editedText, setEditedText] = useState(todo.text)

    function handleDeleteTodo() {
        onDeleteTodo(todo.id)
    }

    return (
        <div className="todo-item">
            {isEditing
                ?
                <>
                    <input
                        type="text"
                        placeholder="Enter New Text....."
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)} />

                    <button className="btn btn-save" onClick={() => {
                        if (editedText.trim() === "")
                            return

                        handleEditTodo(todo.id, editedText)
                        setIsEditing(false)
                    }
                    }>Save</button>

                    <button className="btn btn-cancel" onClick={() => {
                        setEditedText(todo.text)
                        setIsEditing(false)
                    }}>Cancel</button>
                </>
                :
                <>
                    <input type="checkbox"
                        checked={todo.completed}
                        onChange={() => { handleToggleComplete(todo.id) }} />

                    <h3 className={todo.completed ? "completed" : ""}>
                        {todo.text}
                    </h3>

                    <button className="btn btn-edit" onClick={() => setIsEditing(true)}>Edit</button>
                    <button className="btn btn-delete" onClick={handleDeleteTodo}>Delete</button>
                </>}
        </div>
    )
}
export default TodoItem