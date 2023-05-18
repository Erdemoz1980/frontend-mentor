import iconCross from '../images/icon-cross.svg';

const TodoList = ({ todoListFiltered, setTodoList}) => {

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

 
  return (
    <div className="todo-list-wrapper">
      {
        todoListFiltered.map(todo => (
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
    </div>
  )
}

export default TodoList