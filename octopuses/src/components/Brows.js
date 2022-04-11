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

export default function Brows() {
    const classes = styles()
  return (
    <div style={{position:"relative"}}> 
        <NavigationBar/>

        <div className={classes.container}>
        <div className={classes.traits}>

        <h2 id="brows" className={classes.title}>Brows</h2>
          <div className={classes.imageContainer}>
            <TraitsImage image={require('../LayersCompressed/Brows/s101.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Brows/s201.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Brows/s301.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Brows/s401.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Brows/s501.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Brows/s601.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Brows/s701.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Brows/s801.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Brows/s901.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Brows/s1001.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Brows/s1101.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Brows/s1201.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Brows/s1301.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Brows/s1401.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Brows/s1501.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Brows/s1601.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Brows/s1801.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Brows/s1901.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Brows/s2001.png')} name=""/>
          </div>

        </div>
        </div> 

    <Link to="/"> <Button variant="btn btn-outline-dark btn-round" className={classes.button}>Back</Button> </Link>
    <Footer/>
    </div>      
  )
}
