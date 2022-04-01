import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap'
import {Container} from "reactstrap"
import {makeStyles} from "@material-ui/core/styles"
import { Outlet, Link } from "react-router-dom";
//Resources
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
    marginRight: "15px",
    width: "17px",
    height: "17px",
    "&:hover":{
     color: "red",
    },
  },
  navigationBar:{
    padding: "0px",
  },
  logo:{
    marginLeft: "100px", 
    padding: "0px", 
    ['@media (max-width:768px)']: { 
      marginLeft:"0"
    }
  },
  link:{
    color: "white",
    textDecoration: "none",
    "&:hover":{
      color: "black",
      textDecoration: "none",
    },
  },
})

function NavigationBar() {
    const classes = styles()
    return (
      <>
      <Navbar collapseOnSelect expand="sm" bg="white" variant="light" sticky="top"  style={{padding: "0px"}}>
        <Container fluid >
          <Link to="/"> 
            <Navbar.Brand href="#" className={classes.logo}>
              <img src={logo} alt="logo" width="60" height="60"/>
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{marginRight: "10px"}}/>
          
          <Navbar.Collapse id="responsive-navbar-nav" placement="end">
            <Nav className="m-auto" >
              <Link to="/skin" className={classes.link}><Nav.Link href="#skin" className={classes.navItem}>Skin</Nav.Link></Link>
              <Link to="/accessories" className={classes.link}><Nav.Link href="#accessories" className={classes.navItem}>Accessories</Nav.Link></Link>
              <Link to="/clothes" className={classes.link}><Nav.Link href="#clothes" className={classes.navItem}>Clothes</Nav.Link></Link>
              <Link to="/eyes" className={classes.link}><Nav.Link href="#eyes" className={classes.navItem}>Eyes</Nav.Link></Link>
              <Link to="/mouth" className={classes.link}><Nav.Link href="#mouth" className={classes.navItem}>Mouth</Nav.Link></Link>
              <Link to="/tentacles" className={classes.link}><Nav.Link href="#tentacles" className={classes.navItem}>Tentacles</Nav.Link></Link>
              <Link to="/brows" className={classes.link}><Nav.Link href="#brows" className={classes.navItem}>Brows</Nav.Link></Link>
              <Link to="/background" className={classes.link}><Nav.Link href="#background" className={classes.navItem}>Background</Nav.Link></Link>
            </Nav>

            <Nav className="d-none d-sm-flex">
              <Nav.Link href="https://www.instagram.com/tineretbetel/?hl=en" target="_blank">
                <img src={instagram} alt="instagram" className={classes.navSocials} target="_blank"/> 
              </Nav.Link>
              <Nav.Link href="#discord">
                <img src={discord} alt="discord" className={classes.navSocials} target="_blank"/> 
              </Nav.Link>
              <Nav.Link href="#twitter">
              <img src={twitter} alt="twitter" className={classes.navSocials} target="_blank"/> 
              </Nav.Link>
              <Nav.Link href="#reddit">
                <img src={reddit} alt="reddit" className={classes.navSocials} style={{marginRight: "100px"}} target="_blank"/> 
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>

      <Outlet />
      </>
    )
}

export default NavigationBar