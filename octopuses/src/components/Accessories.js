import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
//components
import Footer from './Footer.js'
import TraitsImage from './TraitsImage.js'
import NavigationBar from './NavigationBarTraits.js'
//routes
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const styles = makeStyles({
  container:{
    width:"100%",
    color: "black",
  },
  traits: {
    margin: "auto",
    width:"75%",
    textAlign: "left",
    ['@media (max-width:768px)']: { 
      textAlign: "center", 
    }
  },
  imageContainer:{
    display:"inline-block",
    width:"100%",  
  },
  title:{
    marginTop: "60px",
    marginBottom: "30px",
    fontWeight: "bold",
    display: "block",
  },
  button: {
    margin: "25px 0px",
  },
})

export default function Accesories() {
    const classes = styles()
  return (
    <div style={{position:"relative"}}> 
        <NavigationBar/>

        <div className={classes.container}>
        <div className={classes.traits}>

        <h2 id="accessories" className={classes.title}>Accessories</h2>
          <div className={classes.imageContainer}>
            <TraitsImage image={require('../LayersCompressed/Accessories/6.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/aripi01.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/caciula marinar01.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/caciula.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/caciula401.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/caciula501.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/caciulagri01.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/casca1.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/casca01.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/casca201.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/casti.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/coif01.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/coroana.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/fundita.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/haloo.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/inger.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/masca s1.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/masca01.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/mustata01.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/ocehlari01.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/ochelari.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/ochelari101.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/palarie01.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/palarie201.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/palarie301.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/papion.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/petic01.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/pirat01.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/sapca verde01.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/sapca01.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/sapca201.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/tattoo1.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/tattoo2.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/tattoo31.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/tatuaj01.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Accessories/tatuaj201.JPG')} name=""/>
          </div>
      </div>
      </div> 

    <Link to="/"> <Button variant="btn btn-outline-dark btn-round" className={classes.button}>Back</Button> </Link>
    <Footer/>
    </div>      
  )
}
