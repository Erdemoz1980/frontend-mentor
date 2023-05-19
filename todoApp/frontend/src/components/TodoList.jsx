import { useState } from 'react';
import iconCross from '../images/icon-cross.svg';

const TodoList = ({ todoListFiltered, setTodoList}) => {
  const [draggedItem, setDraggedItem] = useState(null);

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

  function handleDrop(droppedItem) {
    setTodoList(prevState => {
      const updatedList = [...prevState];
      const draggedIndex = updatedList.findIndex(item => item === draggedItem);
      const droppedIndex = updatedList.findIndex(item => item === droppedItem);

      updatedList.splice(draggedIndex, 1);
      updatedList.splice(droppedIndex, 0, draggedItem);

      return updatedList
    })
  }
 
  return (
    <div className="todo-list-wrapper">
      {
        todoListFiltered.map(todo => (
          <div className="todo-item" key={todo.id} draggable="true" onDragStart={()=>setDraggedItem(todo)} onDragOver={e=>e.preventDefault()} onDrop={()=>handleDrop(todo)}>
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