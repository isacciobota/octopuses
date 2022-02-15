import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap'
import {Container} from "reactstrap"
import {makeStyles} from "@material-ui/core/styles"

//Socials
import  instagram  from '../resources/instagramLogo.svg'
import  discord  from '../resources/DiscordLogo.svg'
import  twitter  from '../resources/TwitterLogo.svg'
import  reddit  from '../resources/RedditLogo.svg'
import  logo  from '../resources/Octopus.svg'

const styles = makeStyles({
  navItem:{
    marginLeft: "20px",
    color: "grey",
    "&:hover":{
      color:"black",
     },
  },
  navSocials:{
    marginRight: "20px",
    width: "17px",
    height: "17px",
    
    "&:hover":{
     color: "red",
    },
  },
})

function NavigationBar() {
    const classes = styles()
    return (
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light" sticky="top">
        <Container fluid> 
          <Navbar.Brand href="#" style={{marginLeft: "10px"}}>
           <img src={logo} alt="logo" width="60" height="60"/>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{marginRight: "10px"}}/>
          <Navbar.Collapse id="responsive-navbar-nav" placement="end">
            <Nav className="m-auto" >
              <Nav.Link href="#about" className={classes.navItem}>About</Nav.Link>
              <Nav.Link href="#opensea" className={classes.navItem}>OpenSea</Nav.Link>
              <Nav.Link href="#collection" className={classes.navItem}>Collection</Nav.Link>
              <Nav.Link href="#team" className={classes.navItem}>Team</Nav.Link>
              <Nav.Link href="#contact" className={classes.navItem}>Contact</Nav.Link>
            </Nav>

            <Nav className="d-none d-lg-flex">
              <Nav.Link href="#pricing">
                <img src={instagram} alt="instagram" className={classes.navSocials}/> 
              </Nav.Link>
              <Nav.Link href="#pricing">
                <img src={discord} alt="discord" className={classes.navSocials}/> 
              </Nav.Link>
              <Nav.Link href="#pricing">
              <img src={twitter} alt="twitter" className={classes.navSocials}/> 
              </Nav.Link>
              <Nav.Link href="#pricing">
                <img src={reddit} alt="reddit" className={classes.navSocials} style={{marginRight: "10px"}}/> 
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    )
}

export default NavigationBar