import {Nav,Navbar,} from 'react-bootstrap'
import logo from "../assets/netflix_logo.png"
import avatar from "../assets/avatar.png"
import kids from "../assets/kids_icon.png"
const MyNav = () => {

    return (  <Navbar  variant="dark">
    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">TV Shows</Nav.Link>
      <Nav.Link href="#pricing">Add Movies</Nav.Link>
      <Nav.Link href="#pricing">My List</Nav.Link>
    </Nav>
       <Nav>
       <Nav.Link href="#pricing"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg></Nav.Link>
       </Nav>
       <Nav.Link href="#pricing"><img src={kids} alt="" /></Nav.Link>
       <Nav.Link href="#pricing"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
            </svg></Nav.Link>
            <Nav.Link href="#pricing"><img src={avatar} alt="" /></Nav.Link>


  </Navbar> );
  
}
 
export default MyNav;