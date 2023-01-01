import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><Link className=' text-decoration-none' to={'/'}>
                    <h2 className='fw-bold'>Jersey Shop
                    </h2>
                </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='text-decoration-none px-2 text-dark fw-semibold' to='/'>Home Page</Link>
                        <Link className='text-decoration-none px-2 text-dark fw-semibold' to='/banner'>Banner</Link>
                        <Link className='text-decoration-none px-2 text-dark fw-semibold' to='/jersey'>Jersey</Link>
                        <Link className='text-decoration-none px-2 text-dark fw-semibold' to='/addJersey'>Add Jersey</Link>
                        <Link className='text-decoration-none px-2 text-dark fw-semibold' to='/contactUs'>Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;