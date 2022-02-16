import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
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
        margin: "30px 0px",
    },
    textContainer:{
        float:"left",
        width:"50%",
        textAlign: "left",
        ['@media (max-width:768px)']: { 
          width:"100%",
          textAlign: "center",     
         }
    },
    title:{
        fontWeight: "bold"
    },
    descriere:{
        fontSize: "13px",
    },
    socials:{
        marginLeft: "20px",
        width: "17px",
        height: "17px",
        "&:hover":{
         color: "red",
        },
        ['@media (max-width:768px)']: { 
            marginTop:"15px",   
        }
    },
    socialsContainer:{
        float: "right",
        ['@media (max-width:768px)']: { 
            width:"100%",   
        }
    }
})

function Footer() {
    const classes = styles()  
    return (
    <div>  
        <div className={classes.containerColor}>
        <div className={classes.container}>
            <div className={classes.textContainer}>
                <h6 className={classes.title}>OCTOPUSES</h6>
                <p className={classes.descriere}>Ceva descriere scurta si interesanta</p>
            </div>

            <div className={classes.socialsContainer}>
                    <div>
                    <img src={instagram} alt="instagram" className={classes.socials} style={{marginLeft:"0px"}}/> 
                    <img src={discord} alt="discord" className={classes.socials}/> 
                    <img src={twitter} alt="twitter" className={classes.socials}/> 
                    <img src={reddit} alt="reddit" className={classes.socials}/> 
                </div>
            </div>
        </div>
        </div>
    <p className={classes.descriere} style={{marginBottom:"30px"}}>To the moon 🚀</p>
    </div>  
  )
}

export default Footer