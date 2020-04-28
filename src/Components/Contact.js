import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Contact.css';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    textField:{
        display:'block'
    }
}));

const Contact = (config) => {
    const classes = useStyles();
    return (
        <div>
            <h2 className={'parrafo'}> ¿Te gustaria recibir más informacion? Ingresa tu correo para recibirla!! </h2>
            <form className={'Info'} noValidate autoComplete="off">
                <div className={'Nombre'}><TextField  id="outlined-basic" label="Coreo Electronico" variant="outlined" size={'small'} /></div>
                <div className={'Telefono'}><TextField  id="outlined-basic" label="Teléfono" variant="outlined" size={'small'}/></div>
            </form>
        </div>
    )
}
export default Contact;