import { useState, useEffect } from "react"

const TodoInput = ({ todoList, setTodoList }) => {
  const [checked, setChecked] = useState(false)
  const [todoInput, setTodoInput] = useState('')
  


 //Add todo item to todo list
  function submitHandler() {
    let newId = Math.floor(Math.random() * 1000);
    
    while (todoList.some(item => item.id === newId)) {
      newId = Math.floor(Math.random() * 101); // Generate a new random ID
    }

    //Add current todo item to todo List
    setTodoList(prevState => [
      ...prevState,
      {
        id: Math.floor(Math.random() * 101),
        completed: false,
        todoInput
      }
    ]);
    //Reset: disable checkbox and clear text input
    setChecked(false)
    setTodoInput('')
  }

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todoList))
  },[todoList])


  return (
    <div className="todo-input-wrapper">
        <label className="todo-input-group" htmlFor="todoInput">
          <input type="checkbox" name="todo-input" id="todoInput" checked={checked} disabled={!todoInput} onChange={submitHandler} />
      </label>
      <input type="text" name="text" id="text" placeholder="Create a new todo" value={todoInput} onChange={e=>setTodoInput(e.target.value)} />
      
    </div>
  )
}

export default TodoInput