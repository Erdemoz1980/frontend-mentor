
const Header = () => {
  return (
    <header>
      <div className="title">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>
      <label htmlFor="switch">Dark Mode
      <input type="checkbox" name="switch" id="switch" />
      </label>

    </header>
  )
}

export default Header