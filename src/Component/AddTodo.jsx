import { useState } from 'react'

function AddTodo({onAddTodo}) {
    const [todo, setTodo] = useState('')

    function handleClick(e){
        let value = e.target.value
        setTodo(value)
    }

    function handleAddTodo(){
        if(todo.trim() === "") return;
        onAddTodo({
            id: Date.now(),
            text: todo
        })
        setTodo('')
    }

    return (
        <>
        <input 
        type="text" 
        placeholder='Enter Todo.....' 
        value={todo} 
        onChange={handleClick} />

        <button onClick={handleAddTodo}>Add</button>
        </>
    )
}
export default AddTodo