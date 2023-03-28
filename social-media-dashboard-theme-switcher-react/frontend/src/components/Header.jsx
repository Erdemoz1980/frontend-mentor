
const Header = ({darkTheme, setDarkTheme}) => {

  return (
    <header>
      <div className="main-title">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>
 
      <label htmlFor="switch" className="label">
        {darkTheme ? 'Dark Mode' : 'Light Mode'}
        <div className="switch">
          <input
        type="checkbox"
        name="switch"
        id="switch"
        onClick={()=>setDarkTheme(!darkTheme)}
      />
        <span className="slider"></span>
        </div>
        
      </label>
   
   

    </header>
  )
}

export default Header