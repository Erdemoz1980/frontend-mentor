
const TodoList = ({ todoList, setTodoList }) => {
  
  //Set todo Item to completed or uncompleted upon second click
  function onChangeHandler(currentId) {
    setTodoList(prevState => prevState.map(item => {
      if (item.id === currentId) {
        return { ...item, completed: !item.completed }
      } else {
        return item
      }
    }))
    
  }

  return (
    <div className="todo-list-wrapper">
      {
        todoList.map(todo => (
          <div className="todo-item" key={todo.id}>
            <label htmlFor="todo-complete">
              <input type="checkbox" name="todo-complete" id="todo-complete" checked={todo.completed} onChange={()=>onChangeHandler(todo.id)} />
            </label>
            <p>{todo.todoInput}</p>
          </div>
        ))
      }
    </div>
  )
}

export default TodoList