import { useEffect } from "react";

const TodoControls = ({ todoList, setTodoList, display, setDisplay, numLeft }) => {
  
  useEffect(() => {
    if(todoList.filter(item => item.completed).length<1 || todoList.filter(item => !item.completed).length < 1 ){
      setDisplay('all')
    }
 },[todoList, setDisplay])

  function clearCompleted() {
    setTodoList(prevState => prevState.filter(item => !item.completed));
    setDisplay('all')
  }

  function displayControlHandler(e) {
    setDisplay(e.target.getAttribute('data'))
  }

  return (
    <div className="todo-info">
        <p className="items-left">
          <span>{numLeft}</span>
          <span>item{`${numLeft > 1 || numLeft < 1 ? 's' : ''}`} left</span></p>
          <div className='display-control'>
            <button disabled={todoList.length===0} className={`btn ${display==='all' ? 'active' : ''}`} data='all' onClick={displayControlHandler}>All</button>
          <button disabled={numLeft===0} className={`btn ${display==='active' ? 'active' : ''}`} data='active' onClick={displayControlHandler}>Active</button>
          <button disabled={todoList.length===numLeft} className={`btn ${display==='completed' ? 'active' : ''}`}  data='completed' onClick={displayControlHandler}>Completed</button>
          </div>
        <div className="items-clear">
          <button disabled={numLeft===todoList.length} className='btn' data='clear' onClick={clearCompleted}>Clear Completed</button>
      </div>
      <p className="reorder">Drag and drop to reorder list</p>
      </div>
  )
}

export default TodoControls