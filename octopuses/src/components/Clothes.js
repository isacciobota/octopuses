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

export default function Clothes() {
    const classes = styles()
  return (
    <div style={{position:"relative"}}> 
        <NavigationBar/>

        <div className={classes.container}>
        <div className={classes.traits}>

        <h2 id="clothes" className={classes.title}>Clothes</h2>
          <div className={classes.imageContainer}>
            <TraitsImage image={require('../LayersCompressed/Clothes/haina1.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Clothes/haina3.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Clothes/haina4.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Clothes/haina11.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Clothes/haina21.JPG')} name=""/>
          </div>
      </div>
      </div> 

    <Link to="/"> <Button variant="btn btn-outline-dark btn-round" className={classes.button}>Back</Button> </Link>
    <Footer/>
    </div>      
  )
}
