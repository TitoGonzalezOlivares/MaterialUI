import React from 'react';
import {Container,Box, makeStyles} from '@material-ui/core';
import CardSimple from './CardSimple'
import './Slides.css';
const useStyles = makeStyles ({
    root: {
        marginTop:-100
    },

});

const Slides = (props) => {
    const  classes  = useStyles();
    return (
            <Container maxWidth="md" className={'Container'}>
                <CardSimple src={'img/setup2.jpg'} height={500} />
            </Container>
    )
}
export default Slides;