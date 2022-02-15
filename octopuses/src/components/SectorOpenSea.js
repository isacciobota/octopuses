import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import  logo  from '../resources/Octopus.svg'

//Resources
import  instagram  from '../resources/instagramLogo.svg'
import  discord  from '../resources/DiscordLogo.svg'
import  twitter  from '../resources/TwitterLogo.svg'
import  reddit  from '../resources/RedditLogo.svg'

const styles = makeStyles({
  containerColor:{
    width:"100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white", 
    color: "black",
  },
  container:{
    width:"75%", 
    
  },
  textContainer:{
    float:"left",
    width:"50%",
    textAlign: "left",
  },
  navSocials:{
    margin: "0px 20px 20px 0px",
    width: "17px",
    height: "17px",
    "&:hover":{
     color: "red",
    },
  },
})


function SectorOpenSea() {
  const classes = styles()  
  return (
    <div className={classes.containerColor}>
      <div className={classes.container}>
          <div className={classes.textContainer}>
              <h1>OpenSea</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies euismod lectus, 
                  venenatis aliquet sapien congue ac. Aliquam vitae fringilla lectus, at congue arcu. 
                  Maecenas venenatis lectus sed est euismod, in efficitur augue ornare. Proin ut tincidunt 
                  turpis, aliquam vehicula tellus. Quisque tortor magna, laoreet eu sagittis et, euismod a 
                  ante. Nulla ac odio sit amet justo congue ultrices et vitae neque. Suspendisse varius massa 
                  scelerisque, egestas risus at, fermentum nisi. Sed rhoncus velit id rutrum consectetur. Duis 
                  interdum convallis neque a pretium.
              </p>
              <div >
                  <img src={instagram} alt="instagram" className={classes.navSocials}/> 
                  <img src={discord} alt="discord" className={classes.navSocials}/> 
                  <img src={twitter} alt="twitter" className={classes.navSocials}/> 
                  <img src={reddit} alt="reddit" className={classes.navSocials}/> 
              </div>
          </div>

          <div style={{float:"right"}}>
              <img src={logo} alt="logo" width="60" height="60"/>
          </div>
      </div>
    </div>
  )
}

export default SectorOpenSea