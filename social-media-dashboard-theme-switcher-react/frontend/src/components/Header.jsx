
const Header = ({darkTheme, setDarkTheme}) => {

  return (
    <header>
      <div className="main-title">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>
      <label htmlFor="switch" className="switch">    <input type="checkbox" name="switch" id="switch"
        onClick={()=>setDarkTheme(!darkTheme)} /><span className="slider"></span>
      </label>

    </header>
  )
}

export default Header