import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Contact.css';
import Button from "@material-ui/core/Button";
import {Box} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    textField:{
        display:'block'
    },
    form:{
        maxWidth:'400px',
        float:'right',

    },
    back:{
        background:'url("img/bannerPro.png") no-repeat top left',
        backgroundSize:"100%",
        height:700
    }
}));

const Contact = (config) => {
    const classes = useStyles();
    return (

        <div>
            <h2 className={'parrafo'}> ¿Te gustaria recibir más informacion? Ingresa tu correo para recibirla!! </h2>
            <form className={'Info'} noValidate autoComplete="off">
                <div className={classes.back}>
                <Box className={classes.form}>
                    <div className={'correo'}><TextField  id="filled-basic" label="Coreo Electronico" variant="filled" size={'small'} /></div>
                    <div className={'Telefono'}><TextField  id="filled-basic" label="Teléfono" variant="filled" size={'small'}/></div>
                    <Button variant="outlined" color="primary">
                        Enviar
                    </Button>
                </Box>
                </div>
            </form>
        </div>
    )
}
export default Contact;