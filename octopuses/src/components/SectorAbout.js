import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
//Resources
import instagram  from '../resources/instagramLogo.svg'
import discord  from '../resources/DiscordLogo.svg'
import twitter  from '../resources/TwitterLogo.svg'
import reddit  from '../resources/RedditLogo.svg'
import octopus from '../resources/184.png'

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
    margin: "100px 0px",
  },
  textContainer:{
    float:"left",
    width:"45%",
    textAlign: "left",
    ['@media (max-width:768px)']: { 
      width:"100%",
      textAlign: "center",     
     }
  },
  socials:{
    margin: "20px 25px 20px 0px",
    width: "17px",
    height: "17px",
    "&:hover":{
     color: "red",
    },
  },
  title:{
    marginBottom: "20px",
    fontWeight: "bold",
  },
  semititle:{
    marginTop: "20px",
  },
  text:{
    color:"grey",
    fontSize:"13px",
    lineHeight: "1.8",
    letterSpacing: "1px",
  },
  imageContainer:{
    float:"right",
    width:"50%",  
    ['@media (max-width:768px)']: { 
      width: "100%",     
     }
  },
  imagine:{
    width: "60%",
    float:"right",
    ['@media (max-width:768px)']: { 
     width: "100%",
     marginTop:"30px",     
    }
  },
})


function SectorAbout() {
  const classes = styles()  
  return (
    <div className={classes.containerColor}>
      <div className={classes.container}>
          <div className={classes.textContainer}>
              <h2 className={classes.title}>What are Octopuses?</h2>
              <p className={classes.text}>A collection of 10K unique characters that were inspired by one of the world's cutest creatures: octopuses.</p>
              <h5 className={classes.semititle}>Generative art</h5>
              <p className={classes.text}>Generative art refers to art that in whole or in part has been created with the use of an autonomous system. 
                An autonomous system in this context is generally one that is non-human and can independently determine features 
                of an artwork.</p>
              <h5 className={classes.semititle}>Blockchain</h5>
              <p className={classes.text}>Octopuses are powered by Ethereum. Ethereum is a decentralized, open-source blockchain with smart contract 
                functionality. Among cryptocurrencies, Ether is second only to Bitcoin in market capitalization.</p> 
              <div>
                  <a href="https://www.instagram.com/tineretbetel/?hl=en"><img src={instagram} alt="instagram" className={classes.socials}/></a> 
                  <a href="https://www.instagram.com/tineretbetel/?hl=en"><img src={discord} alt="discord" className={classes.socials}/></a> 
                  <a href="https://www.instagram.com/tineretbetel/?hl=en"><img src={twitter} alt="twitter" className={classes.socials}/></a> 
                  <a href="https://www.instagram.com/tineretbetel/?hl=en"><img src={reddit} alt="reddit" className={classes.socials}/></a> 
              </div>
          </div>

          <div className={classes.imageContainer}>
              <img src={octopus} alt="octopus" className={classes.imagine}/>
          </div>
      </div>
    </div>
  )
}

export default SectorAbout