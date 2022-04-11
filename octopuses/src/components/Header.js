import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
//Resources
import header from '../resources/Artboard.png'

const styles = makeStyles({
  container: {
    position: "relative",
    textAlign: "center",
    color: "white",
  },
  centered: {
    width:"70%",
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    ['@media (max-width:768px)']: { 
      top: "50%",     
     }
  },
  title:{
    margin: "0px",
    fontSize: "4vw",
    fontWeight: "bold",
  },
  date:{
    border: "3px solid white",
    borderRadius: "15px",
    padding:"10px",
    fontSize: "2vw",
    fontWeight: "bold",
    margin: "30px 0px",
    "&:hover":{
      color: "black",
      backgroundColor: "white"
    },
    ['@media (max-width:768px)']: { 
      margin: "10px 0px",     
    }, 
  },
  link:{
    color: "white",
    textDecoration: "none",
    "&:hover":{
      color: "black",
      textDecoration: "none",
    },
  },
  dateCenter:{
    display: "flex",
    justifyContent: "center",
  },
  dateWrapper:{
    width:"40%",
  },
  text:{
    color:"white",
    fontSize:"1vw",
    lineHeight: "1.8",
    letterSpacing: "1px",
  },
})

function Header() {
  const classes = styles() 
  return (
    <div className={classes.container}>
      <img src={header} width="100%" alt="ocean"></img>
      
      <div className={classes.centered}>
        <h2 className={classes.title}>LAUNCHING SOON</h2>
        <div className={classes.dateCenter}>
          <div className={classes.dateWrapper}>
          <a href="https://opensea.io/"className={classes.link} target="_blank"><h2 className={classes.date}>9 June 22:00 UTC</h2></a>
          </div>
        </div>
        <p className={classes.text}>powered by Polygon | launching on OpenSea</p>
      </div>

    </div>
  )
}

export default Header