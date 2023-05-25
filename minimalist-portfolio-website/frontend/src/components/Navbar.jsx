import NavbarHeader from "./NavbarHeader"
import NavbarFooter from "./NavbarFooter"


const Navbar = ({version}) => {
  if (version === 'navbar-header') {
    return <NavbarHeader version={version} />
  } else {
    return <NavbarFooter version={version} />
  }

}

export default Navbar