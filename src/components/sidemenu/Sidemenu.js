import React from 'react';
import { Navbar,Nav,Offcanvas } from 'react-bootstrap';

const SideMenu =()=> {
    return(
        <Navbar bg="light" expand="lg" className='flex-column vh-100'>
            <Navbar.Brand href="#" className='mb-4'>SideMenu</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar"/>
                <Navbar.Offcanvas
                id ="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="">Features</Nav.Link>
                        <Nav.Link href="">Pricing</Nav.Link>
                        <Nav.Link href="">Contact</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
        </Navbar> 
    );
};

export default SideMenu;