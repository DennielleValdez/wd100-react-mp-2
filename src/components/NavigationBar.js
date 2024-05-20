import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
// import {Link} from 'react-router-dom';
import logoImg from "../img/logo.jpg";
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <>
         <Navbar expand="lg navBar" className="sticky-top">
         <Navbar.Brand href="#home" className='Brand'>CryptoNews</Navbar.Brand>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto navItems">
                    <Nav.Link>
                        <Link to="/" className="text-white fw-bold" style={{textDecoration: "none"}}>Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/prices" className="text-white fw-bold" style={{textDecoration: "none"}}>Prices</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/about" className="text-white fw-bold" style={{textDecoration: "none"}}>About</Link>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <img src={props.img} className="w-100" alt="" srcset=""/>
        </>
      );
    }
    
    export default NavBar;