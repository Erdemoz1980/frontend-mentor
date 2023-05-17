import { useEffect } from 'react';
import iconCross from '../images/icon-cross.svg';

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

  function deleteItem(itemId) {
    setTodoList(prevState =>
      prevState.filter(item=>item.id!==itemId)
      )
  }

  return (
    <div className="todo-list-wrapper">
      {
        todoList.map(todo => (
          <div className="todo-item" key={todo.id}>
            <div className="todo-display">
              <label htmlFor="todo-complete">
              <input type="checkbox" name="todo-complete" id="todo-complete" checked={todo.completed} onChange={()=>onChangeHandler(todo.id)} />
            </label>
            <p>{todo.todoInput}</p>
            </div>
            <img src={iconCross} alt='icon cross' onClick={()=>deleteItem(todo.id)} />
            </div>
            
        ))
      }
    </div>
  )
}

export default TodoList