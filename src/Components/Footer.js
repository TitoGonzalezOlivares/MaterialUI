import React from 'react';
import {Grid,makeStyles, Box} from "@material-ui/core";
import Logo from './Logo'
import FaceIcon from "./FaceIcon";
import InstaIcon from "./InstaIcon";

const useStyles = makeStyles({
    root:{
        backgroundColor:'#e9e9e9',
        color:'#000',
        fontSize: '18px',
        paddingTop:20
    },
    icon:{
        fontSize: '35px',
        color:'#ff7400',
        position: 'relative',
        float: 'right',
        top:-35,
        right:6
    }
})

const Footer = () => {
    const classes = useStyles()
    return(
        <div className={classes.root} >
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Logo/>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Box p={4} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorem est impedit incidunt laborum libero natus, nostrum repellat sequi tempora ut veniam? Adipisci autem, corporis excepturi iusto quae rerum ut! </Box>
                </Grid>
            </Grid>
            <FaceIcon className={classes.icon}/>
            <InstaIcon className={classes.icon}/>
        </div>
    )
}

export default Footer;