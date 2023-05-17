import { useState} from "react"

const TodoInput = ({ setTodoList }) => {
  const [checked, setChecked] = useState(false)
  const [todoInput, setTodoInput] = useState('')
  
 //Add todo item to todo list
  function submitHandler() {
    //Add current todo item to todo List
    setTodoList(prevState => [
      ...prevState,
      {
        id: Date.now(),
        completed: false,
        todoInput
      }
    ]);
    //Reset: disable checkbox and clear text input
    setChecked(false)
    setTodoInput('')
  }

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