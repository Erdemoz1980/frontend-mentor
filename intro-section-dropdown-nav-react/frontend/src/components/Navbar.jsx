import logo from '../images/logo.svg';
import arrowDown from '../images/icon-arrow-down.svg';
import iconTodo from '../images/icon-todo.svg';
import iconCalendar from '../images/icon-calendar.svg';
import iconReminders from '../images/icon-reminders.svg';
import iconPlanning from '../images/icon-planning.svg';

const Navbar = () => {

  return (
    <header className="header">
      <nav className="navbar">
        <img className='logo' src={logo} alt='logo' />
        <ul className="menu">
          <li>
            <div className="dropdown-container">
                <ul className="dropdown">
                <li><img src={iconTodo} alt='todo' /><a href="/">Todo List</a></li>
              <li><img src={iconCalendar} alt='calendar'/><a href="/">Calendar</a></li>
              <li><img src={iconReminders} alt='reminders'/><a href="/">Reminders</a></li>
              <li><img src={iconPlanning} alt='planning'/><a href="/">Planning</a></li>            
          </ul>
            </div>
          
            <a href="/">
            Features
          </a><img className='arrow' src={arrowDown} alt='arrow' /></li>
          <li>
          <div className="dropdown-container">
          <ul className="dropdown">
              <li><a href="/">History</a></li>
              <li><a href="/">Our Team</a></li>
              <li><a href="/">Blog</a></li>
              </ul>
              </div>
            <a href="/"><img className='arrow' src={arrowDown} alt='arrow' />
            Company</a>
          </li>
          <li><a href="/">Careers</a></li>
          <li><a href="/">About</a></li>
        </ul>
      </nav>
      <div className="buttons">
        <button className="btn">Login</button>
        <button className="btn btn-border">Register</button>
      </div>
    </header>
  )
}

export default Navbar