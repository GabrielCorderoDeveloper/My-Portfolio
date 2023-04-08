import Nav from 'react-bootstrap/Nav';
import './componentsStyle.css'

const NavBar = () => {
  return (
    <Nav className='d-flex justify-content-between nav-bar'>

      <div className='d-inline-flex p-5'>
          <Nav.Item>
            <Nav.Link className='text-darkGray' href='#'>About me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='text-darkGray' href='#'>Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='text-darkGray' href='#'>More</Nav.Link>
          </Nav.Item>
      </div>

      <div className='nav-circle bg-clearWhite p-5'>
          <Nav.Item>
            <Nav.Link className='text-lightBlack' href='#'>Contact me</Nav.Link>
          </Nav.Item>
      </div>
    </Nav>
  )
}

export default NavBar
