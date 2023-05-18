import iconCross from '../images/icon-cross.svg';

const TodoList = ({ todoList, setTodoList, setDisplay, display, numLeft }) => {

  function onChangeHandler(currentId) {
    setTodoList(prevState =>
       prevState.map(item => {
        if (item.id === currentId) {
          return { ...item, completed: !item.completed }
        } else {
          return item
        }
       }))
  };

  function deleteItem(itemId) {
    setTodoList(prevState =>
      prevState.filter(item=>item.id!==itemId)
    )
  };

  function clearCompleted() {
    setTodoList(prevState => prevState.filter(item => !item.completed));
  }

  function displayControlHandler(e) {
    setDisplay(e.target.getAttribute('data'))
  }

  return (
    <div className="todo-list-wrapper">
      {
        todoList.map(todo => (
          <div className="todo-item" key={todo.id}>
            <div className="todo-display">
              <label className="todo-completed-label" htmlFor={`todo-completed-${todo.id}`}>
              <input type="checkbox" name="todo-complete" id={`todo-completed-${todo.id}`} checked={todo.completed} onChange={()=>onChangeHandler(todo.id)} />
            </label>
            <p className={todo.completed ? 'completed' : ''}>{todo.todoInput}</p>
            </div>
            <img src={iconCross} alt='icon cross' onClick={()=>deleteItem(todo.id)} />
            </div>
        ))
      }

      <div className="todo-info">
        <p className="items-left">
          <span>{numLeft}</span>
          <span>item{`${numLeft > 1 || numLeft < 1 ? 's' : ''}`} left</span></p>
          <div className='display-control'>
            <button className={`btn ${display==='all' ? 'active' : ''}`} data='all' onClick={displayControlHandler}>All</button>
          <button className={`btn ${display==='active' ? 'active' : ''}`} data='active' onClick={displayControlHandler}>Active</button>
          <button className={`btn ${display==='completed' ? 'active' : ''}`}  data='completed' onClick={displayControlHandler}>Completed</button>
          </div>
        <div className="items-clear">
          <button className="btn" data='clear'disabled={numLeft===todoList.length} onClick={clearCompleted}>Clear Completed</button>
        </div>
      </div>
    </div>
  )
}

export default TodoList