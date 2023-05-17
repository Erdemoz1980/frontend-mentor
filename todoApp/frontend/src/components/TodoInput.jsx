import { useState } from "react";

const TodoInput = ({ setTodoList }) => {
  const [checked, setChecked] = useState(false)
  const [todoInput, setTodoInput] = useState('')
  
 //Add todo item to todo list
  function submitHandler() {
    //Add current todo item to todo List
    setChecked(true);
    setTodoList(prevState => [
        ...prevState,
        {
          id: Date.now(),
          completed: false,
          todoInput
        }
      ]
    );
    //Reset: disable checkbox and clear text input
    setTimeout(() => {
      setTodoInput('')
      setChecked(false)
    },500)
   
  }

  return (
    <div className="todo-input-wrapper">
        <label className="todo-input-label" htmlFor="todoInput">
          <input type="radio" name="todo-input" id="todoInput" checked={checked} disabled={!todoInput} onChange={submitHandler} />
      </label>
      <input type="text" name="text" id="text" placeholder="Create a new todo..." value={todoInput} onChange={e=>setTodoInput(e.target.value)} />
      
    </div>
  )
}

export default TodoInput