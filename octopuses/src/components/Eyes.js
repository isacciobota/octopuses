import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
//components
import Footer from './Footer.js'
import TraitsImage from './TraitsImage.js'
import NavigationBar from './NavigationBarTraits.js'

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

export default function Eyes() {
    const classes = styles()
  return (
    <div style={{position:"relative"}}> 
        <NavigationBar/>

        <div className={classes.container}>
        <div className={classes.traits}>

        <h2 id="eyes" className={classes.title}>Eyes</h2>
          <div className={classes.imageContainer}>
            <TraitsImage image={require('../LayersCompressed/Eyes/ochi0.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Eyes/ochi1.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Eyes/ochi2.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Eyes/ochi3.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Eyes/ochi4.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Eyes/ochi5.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Eyes/ochi6.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Eyes/ochi7.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Eyes/ochi8.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Eyes/ochi9.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Eyes/ochi10.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Eyes/ochi11.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Eyes/ochi12.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Eyes/ochi13.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Eyes/ochi14.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Eyes/ochi15.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Eyes/ochi16.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Eyes/ochi17.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Eyes/ochi18.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Eyes/ochi19.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Eyes/ochi20.png')} name=""/>
          </div>

        </div>
        </div> 

    <Link to="/"> <Button variant="btn btn-outline-dark btn-round" className={classes.button}>Back</Button> </Link>
    <Footer/>
    </div>      
  )
}
