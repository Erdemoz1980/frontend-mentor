import { useState, useEffect } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";


const TodoPage = () => {
  const [todoList, setTodoList] = useState(() => {
    const storedTodoList = localStorage.getItem('todo');
    return storedTodoList ? JSON.parse(storedTodoList) : []
  });
  
  useEffect(() => {
    const itemsFromStorage = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];
    setTodoList(itemsFromStorage);
  }, []);

 
  

  return (
    <div className="todo-main-wrapper">
      <header>
        <h1>Todo</h1>
        <div className="switch-group">
          <label htmlFor="theme-switch">Theme Switcher</label>
        <input type="checkbox" name="theme-switch" id="theme-switch" />
        </div>
      </header>
      <TodoInput setTodoList={setTodoList} todoList={todoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  )
}

export default TodoPage