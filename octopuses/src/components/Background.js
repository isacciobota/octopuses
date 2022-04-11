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

export default function Background() {
    const classes = styles()
  return (
    <div style={{position:"relative"}}> 
        <NavigationBar/>

        <div className={classes.container}>
        <div className={classes.traits}>

        <h2 id="background" className={classes.title}>Background</h2>
          <div className={classes.imageContainer}>
            <TraitsImage image={require('../LayersCompressed/Background/bg2.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg1.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg3.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg4.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg5.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg6.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg7.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg8.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg9.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg10.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg11.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg12.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg13.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg14.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg15.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg16.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg17.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg18.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg19.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg20.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg21.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg22.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg23.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg24.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg25.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg26.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg27.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg28.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg29.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg30.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg31.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg32.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg33.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg34.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg35.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg36.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg37.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg38.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg39.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg40.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg41.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg42.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg43.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg44.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg45.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg46.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg47.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg48.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg49.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg50.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg51.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg52.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg53.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg54.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Background/bg55.JPG')} name=""/>     
          </div>

        </div>
        </div> 

    <Link to="/"> <Button variant="btn btn-outline-dark btn-round" className={classes.button}>Back</Button> </Link>
    <Footer/>
    </div>      
  )
}
