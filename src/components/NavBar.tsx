import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar className='d-flex flex-row-reverse justify-content-between nav-bar up-animation'
     expand="sm" collapseOnSelect>

      <Navbar.Brand> {/*//1? This is the Contact me button */}
         <div className='nav-circle bg-clearWhite'>
             <Nav.Link className='text-lightBlack' href='#'>Contact me</Nav.Link>
        </div> {/*//1? The parent has flex-reverse so that the button will be showed at the end.
                  //1? this was made to have the button when the navbar shrinks into the hambuerme menu*/}
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse  className='my-fixed-navbar'>
        <Nav>
          <div className='nav-item-top bg-clearWhite'>
            <Nav.Link className='text-darkGray px-1' href='#whoIAm'>About me</Nav.Link>
          </div>
          <div className='nav-item bg-clearWhite'>
            <Nav.Link className='text-darkGray px-1' href='#projects'>Portfolio</Nav.Link>
          </div>
          <div className='nav-item-bottom bg-clearWhite'>
            <Nav.Link className='text-darkGray px-1' href='#'>More</Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  )
}

export default NavBar
