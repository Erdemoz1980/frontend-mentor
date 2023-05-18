
const TodoControls = ({ todoList, setTodoList, todoListFiltered, display, setDisplay, numLeft }) => {

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
            <button disabled={todoList.length===0} className={`btn ${todoList.length===0 ? 'disabled' : display==='all' ? 'active' : ''}`} data='all' onClick={displayControlHandler}>All</button>
          <button disabled={numLeft===0} className={`btn ${numLeft===0 ? 'disabled' : display==='active' ? 'active' : ''}`} data='active' onClick={displayControlHandler}>Active</button>
          <button disabled={todoList.length===numLeft} className={`btn ${todoList.length===numLeft ? 'disabled' : display==='completed' ? 'active' : ''}`}  data='completed' onClick={displayControlHandler}>Completed</button>
          </div>
        <div className="items-clear">
          <button disabled={numLeft===todoListFiltered.length} className={`btn ${todoList.length===numLeft ? 'disabled' : ''}`} data='clear' onClick={clearCompleted}>Clear Completed</button>
        </div>
      </div>
  )
}

export default TodoControls