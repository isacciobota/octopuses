import React from 'react'
import {makeStyles} from "@material-ui/core/styles"

const styles = makeStyles({
  container:{
    width:"100%",
    display: "flex",
    justifyContent: "center"

  },
})

function SectorColor(props) {
  const classes = styles()
      return (
        <div className={classes.container} style={{backgroundColor: props.bgColor, color: props.textColor}}>
        </div>
      );
}

export default SectorColor