import React from 'react';
import { Grid, makeStyles} from '@material-ui/core';
import CardSimple from './CardSimple'
import './ProductSection.css';


const useStyles = makeStyles ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
    },
});

const ProductSection = () => {
    const  classes  = useStyles();
    return (
        <div className={classes.root} >
            <h2 className={'TituloPrd'}>Explora nuestros Productos</h2>
            <p className={'ParrafoProd'}>Especializados en memoria de muy alto rendimiento, fuentes de alimentación ultraeficientes y otros componentes clave del sistema, nuestros productos son la elección de overclockers, entusiastas y jugadores de todo el mundo.</p>
            <Grid container spacing={3} >
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/mouseM2.png'} height={170} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/refrigeracion.png'} height={170} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/teclado.png'}  height={170} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/chasis.png'}  height={170} />
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/Mousepad.png'} height={170}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/ram.gif'} height={170} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/ventiladores.jpg'}  height={170} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/audifonosPbase.gif'}  height={170} />
                    </Grid>
                </Grid>
            </Grid>
        </div>

    );

}



export default ProductSection;