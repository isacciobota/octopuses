import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import Button from 'react-bootstrap/Button'
//Resources
import octopus from '../resources/Octopus2.jpeg'

const styles = makeStyles({
  containerColor:{
    width:"100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black", 
    color: "white",
  },
  container:{
    width:"75%", 
    margin: "100px 0px",
  },
  textContainer:{
    float: "right",
    width:"50%",
    textAlign: "right",
    ['@media (max-width:768px)']: { 
      width:"100%",
      textAlign: "center",     
     }
  },
  title:{
    marginBottom: "20px",
    ['@media (max-width:768px)']: { 
      marginTop:"20px",     
     }
  },
  imageContainer:{
    float:"left",
    width:"50%",
  },
  imagine:{
    width: "60%",
    float:"left",
    ['@media (max-width:768px)']: { 
     width: "100%",
     marginTop:"30px",     
    }
  },
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
              <h1 className={classes.title}>OpenSea</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies euismod lectus, 
                  venenatis aliquet sapien congue ac. Aliquam vitae fringilla lectus, at congue arcu. 
                  Maecenas venenatis lectus sed est euismod, in efficitur augue ornare. Proin ut tincidunt 
                  turpis, aliquam vehicula tellus. Quisque tortor magna, laoreet eu sagittis et, euismod a 
                  ante. Nulla ac odio sit amet justo congue ultrices et vitae neque. Suspendisse varius massa 
                  scelerisque, egestas risus at, fermentum nisi. Sed rhoncus velit id rutrum consectetur. Duis 
                  interdum convallis neque a pretium.
              </p>
              <Button variant="btn btn-outline-light btn-round" href="#placeholder">OpenSea</Button>
          </div>
      </div>
    </div>
  )
}

export default SectorOpenSea