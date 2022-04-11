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

export default function Skin() {
    const classes = styles()
  return (
    <div style={{position:"relative"}}> 
        <NavigationBar/>

        <div className={classes.container}>
        <div className={classes.traits}>

          <h2 id="skin" className={classes.title}>Skin</h2>
          <div className={classes.imageContainer}>
            <TraitsImage image={require('../LayersCompressed/Skin/9.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/10.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/11.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/12.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/13.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/14.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/15.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/16.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/17.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/18.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/19.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/61.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/71.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/201.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/301.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/401.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/501.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/801.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/caracatita101.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/corp1.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/corp2.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/corp3.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/corp4.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/corp5.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/corp6.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/corp7.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/corp9.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/corp10.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/corp11.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Skin/corp12.JPG')} name=""/>
          </div>
          </div>
      </div> 

    <Link to="/"> <Button variant="btn btn-outline-dark btn-round" className={classes.button}>Back</Button> </Link>
    <Footer/>
    </div>      
  )
}
