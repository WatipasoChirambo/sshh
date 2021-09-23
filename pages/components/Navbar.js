import Link from 'next/link';
import React from 'react'
import  NavLink  from '../components/NavLink'
import Image from 'next/image';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../public/logo.png';

const Navigatiobar = () => {
    return ( 
        <Navbar expand="md">
          <Navbar.Brand>
          <Link href="/" passHref>
              <Image src={logo} alt="logo" height={100} width={320}/>
          </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Link href="/" exact passHref>
                  <a>Home</a>
              </Link>
            </Nav>
            <Nav>
              <Link href="/cars" passHref>
                  <a>Vehicles</a>
              </Link>
            </Nav>
            <Nav>
              <Link href="/services" passHref>
                  <a>Services</a>
              </Link>
            </Nav>
            <Nav>
              <Link href="/about" passHref>
                  <a>About Us</a>
              </Link>
            </Nav>
    </Navbar.Collapse>
</Navbar>
);
}

export default Navigatiobar;