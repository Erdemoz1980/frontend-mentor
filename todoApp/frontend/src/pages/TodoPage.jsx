import { useState, useEffect, useMemo } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import TodoControls from '../components/TodoControls';

const TodoPage = () => {
  const [theme, setTheme] = useState('light');
  const [todoList, setTodoList] = useState(() => {
    const storedTodoList = localStorage.getItem('todo');
    return storedTodoList ? JSON.parse(storedTodoList) : []
  });
  const [display, setDisplay] = useState('all');
  const numLeft = todoList.filter(item => !item.completed).length

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todoList))
  }, [todoList])

  function switchHandler(e) {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const todoListFiltered = useMemo(() => {
    if (display === 'active') {
      return todoList.filter(item => !item.completed)
    } else if (display === 'completed') {
      return todoList.filter(item=>item.completed)
    } else {
      return todoList
    }
  },[display, todoList])

  return (
    <div className={`todo-bg-wrapper ${theme}`}>
       <header>
          <div className="header-container">
            <h1 className="main-title">Todo</h1>
              <label className={`theme-switch ${theme}`} htmlFor="theme-switch">
               <input type="checkbox" name="theme-switch" id="theme-switch" value={theme} checked={theme === 'dark'} onChange={switchHandler} /> 
              </label> 
          </div>
          <TodoInput setTodoList={setTodoList} todoList={todoList} theme={theme} />
        </header>
      <div className="todo-main-wrapper">
        <TodoList todoListOriginal={todoList} todoListFiltered={todoListFiltered} setTodoList={setTodoList} setDisplay={setDisplay} display={display} numLeft={numLeft} />
        {todoList.length>0 && <TodoControls todoList={todoList} setTodoList={setTodoList} display={display} setDisplay={setDisplay} numLeft={numLeft}  />}
      </div>
    </div>
  )
}

export default TodoPage