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

export default function Tentacles() {
    const classes = styles()
  return (
    <div style={{position:"relative"}}> 
        <NavigationBar/>

        <div className={classes.container}>
        <div className={classes.traits}>

        <h2 id="tentacles" className={classes.title}>Tentacles</h2>
          <div className={classes.imageContainer}>
            <TraitsImage image={require('../LayersCompressed/Tentacles/tentacule1.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Tentacles/tentacule2.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Tentacles/tentacule3.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Tentacles/tentacule4.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Tentacles/tentacule5.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Tentacles/tentacule6.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Tentacles/tentacule7.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Tentacles/tentacule8.png')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Tentacles/tentacule9.png')} name=""/>
          </div>

        </div>
        </div> 

    <Link to="/"> <Button variant="btn btn-outline-dark btn-round" className={classes.button}>Back</Button> </Link>
    <Footer/>
    </div>      
  )
}
