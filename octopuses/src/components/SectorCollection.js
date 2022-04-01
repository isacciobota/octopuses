import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
//Resources
import octopus from '../resources/308.png'
import colaj from '../resources/Colaj.png'


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
  button:{
    marginTop:"20px",
    ['@media (max-width:768px)']: { 
      marginTop:"20px", 
      marginBottom:"20px",    
     }
  },
  colaj:{
    width:"100%",
    marginBottom: "50px"
  }
})


function SectorCollection() {
  const classes = styles()  
  return (
    <div>
    <div className={classes.containerColor}>
      <div className={classes.container}>
          <div className={classes.textContainer}>
              <h2 className={classes.title}>Collection</h2>
              <p className={classes.text}>As we already said, there will be 10k Octopuses.
                <br/><br/>
                Each Octopus is generated randomly using all the traits, so each Octopus is unique in their own ways. 
                <br/><br/>                
                However, some Octopuses are more unique than others. If you’re lucky, you might get a legendary trait!
                </p>
              <Link to="/traits"><Button variant="btn btn-outline-dark btn-round" style={{marginRight:"20px"}} className={classes.button}>Traits<span className="sr-only"></span></Button></Link>
              <Link to="/gallery"><Button variant="btn btn-outline-dark btn-round" className={classes.button}>Gallery</Button></Link>
          </div>

          <div className={classes.imageContainer}>
              <img src={octopus} alt="logo" className={classes.imagine} />
          </div>
      </div>
    </div>
    <div className={classes.colaj}><img src={colaj} width="100%" alt="colaj"></img></div>
    </div>
  )
}

export default SectorCollection