import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core';

import { Navbar } from '../../components/Navbar';




const useStyles = makeStyles({
    background: {
        backgroundImage: `linear-gradient(rgba(0, 49, 85) 0%, rgba(121,147,163,1) 47%, rgba(249,249,249,1) 100%)`,
        width: '100%',
        height: '90%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    },
    list_item: {
        textAlign: 'center',
        position: 'relative',
        top: 25,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',

    }
    
});

export const Contact = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h1>Coming soon....</h1>
             
            
                <ol className={classes.list_item}>
                    <li >Costumer Service</li>
                </ol>
            </div>
            </div>
            
        </>
    )
}