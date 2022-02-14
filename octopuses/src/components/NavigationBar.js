import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import {Container} from "reactstrap"

//Socials
import  instagram  from '../resources/instagramLogo.svg'
import  discord  from '../resources/DiscordLogo.svg'
import  twitter  from '../resources/TwitterLogo.svg'
import  reddit  from '../resources/RedditLogo.svg'

function NavigationBar() {
    return (
      <Navbar bg="light" variant="light">
        <Container>
        <Nav className="me-auto" >
          <Nav.Link href="#pricing">
            <img src={instagram} width="20" height="20" className="d-inline-block align-top" /> 
          </Nav.Link>
          <Nav.Link href="#pricing">
            <img src={discord} width="20" height="20" className="d-inline-block align-top" /> 
          </Nav.Link>
          <Nav.Link href="#pricing">
           <img src={twitter} width="20" height="20" className="d-inline-block align-top" /> 
          </Nav.Link>
          <Nav.Link href="#pricing">
            <img src={reddit} width="20" height="20" className="d-inline-block align-top" /> 
          </Nav.Link>

          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#features">OpenSea</Nav.Link>
          <Nav.Link href="#pricing">Collection</Nav.Link>
          <Nav.Link href="#pricing">Team</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>

        </Nav>
        </Container>
      </Navbar>
    )
}

export default NavigationBar