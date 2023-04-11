import Navbar from 'react-bootstrap/esm/Navbar';
import './componentsStyle.css'
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <Navbar className='d-flex flex-row-reverse justify-content-between nav-bar'
     expand="sm" collapseOnSelect>

      <Navbar.Brand>
         <div className='nav-circle bg-clearWhite'>
             <Nav.Link className='text-lightBlack' href='#'>Contact me</Nav.Link>
        </div>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <div className='nav-item-top bg-clearWhite'>
            <Nav.Link className='text-darkGray ps-4 px-1' href='#'>About me</Nav.Link>
          </div>
          <div className='nav-item bg-clearWhite'>
            <Nav.Link className='text-darkGray px-1' href='#'>Portfolio</Nav.Link>
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



    // <Nav className='d-flex justify-content-between nav-bar'>

    //   <div className='d-inline-flex'>
    //       <Nav.Item>
    //         <Nav.Link className='text-darkGray' href='#'>About me</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Nav.Link className='text-darkGray' href='#'>Portfolio</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Nav.Link className='text-darkGray' href='#'>More</Nav.Link>
    //       </Nav.Item>
    //   </div>

    //   <div className='nav-circle bg-clearWhite'>
    //       <Nav.Item>
    //         <Nav.Link className='text-lightBlack' href='#'>Contact me</Nav.Link>
    //       </Nav.Item>
    //   </div>
    // </Nav>