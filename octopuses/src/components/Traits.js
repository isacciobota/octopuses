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

function Traits() {
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

          <h2 id="clothes" className={classes.title}>Clothes</h2>
          <div className={classes.imageContainer}>
            <TraitsImage image={require('../LayersCompressed/Clothes/haina1.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Clothes/haina3.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Clothes/haina4.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Clothes/haina11.JPG')} name=""/>
            <TraitsImage image={require('../LayersCompressed/Clothes/haina21.JPG')} name=""/>
          </div>

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

export default Traits