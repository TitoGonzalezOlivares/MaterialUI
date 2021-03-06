import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import './GallerySection.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: 800,
    },
}));

const GallerySection = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h2 className={'titulo'}>Galeria</h2>
            <p className={'parrafo'}>Aquí te mostramos las fotografías que nos envían nuestros Fans.</p>

            <GridList cellHeight={350} className={classes.gridList} cols={3}>
                <GridListTile key={'x'} cols={2}>
                    <img src={'img/Galeria/Desktop1.png'} alt={'Example'} />
                </GridListTile>
                <GridListTile key={'x'} cols={1}>
                    <img src={'img/Galeria/Dog1.png'} alt={'Example'} />
                </GridListTile>
                <GridListTile key={'x'} cols={1}>
                    <img src={'img/Galeria/desktop2.png'} alt={'Example'} />
                </GridListTile>
                <GridListTile key={'x'} cols={1}>
                    <img src={'img/Galeria/desktop3.png'} alt={'Example'} />
                </GridListTile>
                <GridListTile key={'x'} cols={1}>
                    <img src={'img/Galeria/Game1.png'} alt={'Example'} />
                </GridListTile>
                <GridListTile key={'x'} cols={3}>
                    <img src={'img/Galeria/LanParty1.png'} alt={'Example'} />
                </GridListTile>
                <GridListTile key={'x'} cols={1}>
                    <img src={'img/Galeria/Cat1.png'} alt={'Example'} />
                </GridListTile>
                <GridListTile key={'x'} cols={2}>
                    <img src={'img/Galeria/desktop4.png'} alt={'Example'} />
                </GridListTile>
            </GridList>
        </div>
    );
}

export default GallerySection;