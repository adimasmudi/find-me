import React, { useEffect, useHistory } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import { Grid } from '@material-ui/core';

import useStyle from './style';

const StartApp = ()=>{

    let navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{

            navigate("/home",{replace : true});
            
        },2000)
    },[])

    const classes = useStyle();

    return (
        <>
            <Grid container direction="row" justify='center' alignItems='center' className={classes.startBackground}>
                <Grid item md={12}>
                    <Grid container direction="row" justify="center" alignItems="center" alignContent="center" style={{minHeight:"200px"}} >
                        <Grid item md={2}>
                            <img src="/images/product_icon.png" alt="product_icon" className={classes.productIcon}/>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>

        </>
    )
}

export default StartApp;