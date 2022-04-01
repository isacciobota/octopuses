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

export default function Mouth() {
    const classes = styles()
  return (
    <div style={{position:"relative"}}> 
        <NavigationBar/>

        <div className={classes.container}>
        <div className={classes.traits}>

        <h2 id="mouth" className={classes.title}>Mouth</h2>
          <div className={classes.imageContainer}>
            <TraitsImage image={require('../LayersCompressed/Mouth/gura20.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Mouth/gura101.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Mouth/gura201.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Mouth/gura301.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Mouth/gura401.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Mouth/gura501.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Mouth/gura601.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Mouth/gura701.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Mouth/gura801.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Mouth/gura901.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Mouth/gura1001.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Mouth/gura1101.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Mouth/gura1201.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Mouth/gura1301.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Mouth/gura1401.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Mouth/gura1501.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Mouth/gura1601.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Mouth/gura1701.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Mouth/gura1801.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Mouth/gura1901.png')} name=""/>
          </div>

        </div>
        </div> 

    <Link to="/"> <Button variant="btn btn-outline-dark btn-round" className={classes.button}>Back</Button> </Link>
    <Footer/>
    </div>      
  )
}
