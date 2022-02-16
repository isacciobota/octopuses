import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
//Resources
import  isac  from '../resources/Octopus1.jpeg'
import  oana  from '../resources/Octopus2.jpeg'
import  teemo  from '../resources/Octopus1.jpeg'

const styles = makeStyles({
  containerColor:{
    width:"100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black", 
    color: "white",
  },
  container:{
    margin: "50px 0px",
    width: "50%",
    ['@media (max-width:768px)']: { 
      width: "100%",     
     }
  },
  items:{
    width: "33%",
    float:"left",
    ['@media (max-width:768px)']: { 
     width: "100%",     
    }
  },
  imagine:{
    width: "65%",
    ['@media (max-width:768px)']: { 
     width: "70%",
     marginTop:"30px",     
    }
  },
  nume:{
    marginTop: "20px",
    fontSize: "20px",
  },
  title:{
    color: "white",
    paddingTop: "70px",
  }
})

function SectorContentTeam() {
  const classes = styles()  
  return (
    <div style={{backgroundColor:"black"}}>
      <h1 className={classes.title}>Who are we?</h1>
      <div className={classes.containerColor}>
        <div className={classes.container}>
                <div className={classes.items}>
                  <img src={isac} alt="isac" className={classes.imagine}/>
                  <p className={classes.nume}>Isac Ciobota</p>
                </div>

                <div className={classes.items}>
                  <img src={oana} alt="oana" className={classes.imagine}/>
                  <p className={classes.nume}>Oana Negrut</p>
                </div>

                <div className={classes.items}>
                  <img src={teemo} alt="teemo" className={classes.imagine}/>
                  <p className={classes.nume}>Teemo</p>
                </div>
        </div>
      </div>
    </div>
  )
}

export default SectorContentTeam