import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
//components
import Footer from './Footer.js'
import TraitsImage from './TraitsImage.js'
import NavigationBar from './NavigationBarGallery.js'

const styles = makeStyles({
  container:{
    width:"100%",
    color: "black",
  },
  gallery: {
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

function Gallery() {
  const classes = styles()
  return (  
    <div> 
      <NavigationBar />

      <div className={classes.container}>
      <div className={classes.gallery}>

        <h2 id="tentacles" className={classes.title}>Gallery</h2>
        <div className={classes.imageContainer}>
          <TraitsImage image={require('../Layers/Tentacles/tentacule1.png')} name=""/>
          <TraitsImage image={require('../Layers/Tentacles/tentacule2.png')} name=""/>
          <TraitsImage image={require('../Layers/Tentacles/tentacule3.png')} name=""/>
          <TraitsImage image={require('../Layers/Tentacles/tentacule4.png')} name=""/>
          <TraitsImage image={require('../Layers/Tentacles/tentacule5.png')} name=""/>
          <TraitsImage image={require('../Layers/Tentacles/tentacule6.png')} name=""/>
          <TraitsImage image={require('../Layers/Tentacles/tentacule7.png')} name=""/>
          <TraitsImage image={require('../Layers/Tentacles/tentacule8.png')} name=""/>
          <TraitsImage image={require('../Layers/Tentacles/tentacule9.png')} name=""/>
        </div>
  
      </div>
      </div>

      <Link to="/"> <Button variant="btn btn-outline-dark btn-round" className={classes.button}>Back</Button> </Link>
      <Footer />
    </div>
  )
}

export default Gallery