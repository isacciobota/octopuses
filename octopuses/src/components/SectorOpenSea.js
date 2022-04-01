import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import Button from 'react-bootstrap/Button'
//Resources
import octopus from '../resources/9581.png'

const styles = makeStyles({
  containerColor:{
    width:"100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#044959", 
    color: "white",
  },
  container:{
    width:"75%", 
    margin: "100px 0px",
  },
  textContainer:{
    float: "right",
    width:"45%",
    textAlign: "left",
    ['@media (max-width:768px)']: { 
      width:"100%",
      textAlign: "center",     
     }
  },
  title:{
    marginBottom: "20px",
    fontWeight: "bold",
  },
  semititle:{
    marginTop: "20px",
  },
  text:{
    fontSize:"13px",
    lineHeight: "1.8",
    letterSpacing: "1px",
  },
  imageContainer:{
    float:"left",
    width:"50%",
    ['@media (max-width:768px)']: { 
      width: "100%",     
     }
  },
  imagine:{
    width: "60%",
    float:"left",
    ['@media (max-width:768px)']: { 
     width: "100%",
     marginBottom:"30px",     
    }
  },
  button:{
    ['@media (max-width:768px)']: { 
      marginTop:"20px",     
     }
  }
})


function SectorOpenSea() {
  const classes = styles()  
  return (
    <div className={classes.containerColor}>
      <div className={classes.container}>
          <div className={classes.imageContainer}>
            <img src={octopus} alt="octopus" className={classes.imagine}/>
          </div>
          <div className={classes.textContainer}>
              <h2 className={classes.title}>Where can I buy Octopuses?</h2>
              <p className={classes.text}>Well, everybody knows that octopuses inhabit various regions of the ocean. Because of that, they will be available on OpenSea marketplace 
              (see what we did there?🤣) since 9 June 2022.
              </p>
              <h5 className={classes.semititle}>OpenSea</h5>
              <p className={classes.text}> OpenSea is the largest marketplace for non-fungible tokens (NFTs).</p> 
              <Button variant="btn btn-outline-light btn-round" href="https://opensea.io/" className={classes.button} target="_blank">OpenSea</Button>
          </div>
      </div>
    </div>
  )
}

export default SectorOpenSea