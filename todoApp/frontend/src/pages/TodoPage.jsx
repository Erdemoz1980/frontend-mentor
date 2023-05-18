import { useState, useEffect } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const TodoPage = () => {
  const [theme, setTheme] = useState('light');
  const [todoList, setTodoList] = useState(() => {
    const storedTodoList = localStorage.getItem('todo');
    return storedTodoList ? JSON.parse(storedTodoList) : []
  });
  const [display, setDisplay] = useState('all');
  const numLeft = todoList.filter(item => !item.completed).length;
  
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todoList))
  }, [todoList])

  function switchHandler(e) {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`todo-bg-wrapper ${theme}`}>
      <div className="todo-main-wrapper">
        <header>
          <div className="header-container">
            <h1 className="main-title">Todo</h1>
            <div className="switch-group">
              <label htmlFor="theme-switch">Theme Switcher</label>
              <input type="checkbox" name="theme-switch" id="theme-switch" value={theme} checked={theme === 'dark'} onChange={switchHandler} />
            </div>
          </div>
          <TodoInput setTodoList={setTodoList} todoList={todoList} />
        </header>
        <TodoList todoList={display === 'active' ? todoList.filter(item => !item.completed) : display === 'completed' ? todoList.filter(item => item.completed) : todoList} setTodoList={setTodoList} setDisplay={setDisplay} display={display} numLeft={numLeft} />
      </div>
    </div>
  )
}

export default TodoPage