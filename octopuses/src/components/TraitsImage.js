import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles({
  items: {
    textAlign: "center",
    border:"1px solid black",
    borderRadius: "15px",
    marginRight:"20px",
    marginBottom:"20px",
    width: "18%",
    float:"left",
    ['@media (max-width:768px)']: { 
      marginRight:"10px",
      marginLeft:"10px",
      width: "26%",    
     }
  },
  image:{
    borderRadius: "15px",  
    padding: "1px",
    quality:"10",
    width: "100%",
    float:"left",
  },
  nume:{
    marginTop: "20px",
    fontSize: "16px",
  },
})

function TraitsImage(props) {
  const classes = styles()
  return (
    <div>
        <div className={classes.items}>
            <img src={props.image} alt="logo" className={classes.image} />
            <p className={classes.nume}>{props.name}</p>
        </div>
    </div>
  )
}

export default TraitsImage