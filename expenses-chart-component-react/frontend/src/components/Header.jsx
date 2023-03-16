import logo from '../images/logo.svg';

const Header = ({balance}) => {
  return (
    <div className="header">
      <div className="balance">
        <p>My balance</p>
        <h1>$921.48</h1>
      </div>
      <img className="logo" src={logo} alt="logo" />
    </div>
  )
}

export default Header