import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
//Resources
import  isac  from '../resources/Isac.png'
import  oana  from '../resources/Oana.png'
import  teemo  from '../resources/Timo.png'
import colaj from '../resources/Colaj3.png'

const styles = makeStyles({
  containerColor:{
    width:"100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white", 
    color: "black",
  },
  container:{
    margin: "70px 0px",
    width: "75%",
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
    fontSize: "16px",
  },
  title:{
    color: "black",
    paddingTop: "70px",
    fontWeight: "bold",
  }
})

function SectorContentTeam() {
  const classes = styles()  
  return (
    <div style={{backgroundColor:"white"}}>
      
      <h2 className={classes.title}>Who are we?</h2>
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
                  <p className={classes.nume}>Timotei Perju</p>
                </div>
        </div>
      </div>
    </div>
  )
}

export default SectorContentTeam