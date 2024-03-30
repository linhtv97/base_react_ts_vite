import { FC } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { BsCart } from 'react-icons/bs'
import { RxPerson } from 'react-icons/rx'

type Props = {}

const Menu: FC<Props> = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='nav_bar_menu'>
          <Nav className='me-auto nav_bar_menu'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link>Product</Nav.Link>
            <Nav.Link href='#link'>Category</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              id='nav-dropdown-dark-example'
              title={
                <div style={{ minWidth: 30 }}>
                  <RxPerson />
                </div>
              }
              className={'profile-dropdown'}
            >
              <NavDropdown.Item href='#action/3.1'>Profile</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.4'>Logout</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <BsCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
