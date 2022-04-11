import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
//Resources
import  instagram  from '../resources/instagramLogo2.svg'
import  discord  from '../resources/DiscordLogo2.svg'
import  twitter  from '../resources/TwitterLogo2.svg'
import  reddit  from '../resources/RedditLogo2.svg'

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
        marginTop: "30px",
        marginBottom: "0px",
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
        fontSize: "11px",
        marginBottom: "10px",
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
            marginBottom:"20px",
        }
    },
    footerWrapper:{
        width:"100%",
        backgroundColor: "#044959", 
        color: "white",
    }
})

function Footer() {
    const classes = styles()  
    return (
    <div className={classes.footerWrapper}>  
        <div className={classes.containerColor}>
            <div className={classes.container}>
                <div className={classes.textContainer}>
                    <h6 className={classes.title}>OCTOPUSES</h6>
                    <p className={classes.descriere}>#1 NFT Collection // Powered by Ethereum // Available on OpenSea</p>
                </div>

                <div className={classes.socialsContainer}>
                        <div>
                        <a href="https://instagram.com/octopusesnft?utm_medium=copy_link" target="_blank"><img src={instagram} alt="instagram" className={classes.socials} style={{marginLeft:"0px"}}/></a> 
                        <a href="https://discord.gg/UebBHWHNNZ" target="_blank"><img src={discord} alt="discord" className={classes.socials}/></a>
                        <a href="https://twitter.com/NFTOctopuses" target="_blank"><img src={twitter} alt="twitter" className={classes.socials}/></a>
                        <a href="https://www.reddit.com/r/octopusesnft/" target="_blank"><img src={reddit} alt="reddit" className={classes.socials}/></a> 
                    </div>
                </div>
            </div>
        </div>
        <p style={{fontSize: "13px", paddingBottom: "20px", margin:"0px"}}>To the moon 🚀</p>
    </div>  
  )
}

export default Footer