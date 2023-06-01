import NavbarHeader from "./NavbarHeader"
import NavbarFooter from "./NavbarFooter"


const Navbar = ({version, activePage}) => {
  if (version === 'nav-header') {
    return <NavbarHeader version={version} activePage={activePage} />
  } else {
    return <NavbarFooter version={version} activePage={activePage}/>
  }

}

export default Navbar