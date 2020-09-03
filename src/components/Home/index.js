
import { Grid } from '@material-ui/core';
import Sidebar from '../Sidebar'
import React from 'react';
// import styles from './home.module.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



const Home = () => {
    return (
        <div>
            <Grid container spacing={12} justify="space-between">
                {/* col */}
                <Grid item xs={6} style={{ color: "black" }}>
                </Grid>
                {/* col 2 */}
                <Grid container xs={6} style={{ color: "black", height: "100vh" }} justify="flex-Start">
                    <Grid container justify="center" alignItems="flex-start" xs={9} style={{ paddingTop: "10px" }}>
                        <Grid item justify="flex-start" xs={4}>
                            <Sidebar></Sidebar>
                        </Grid>
                        <Grid item xs={8}>
                            Ryan Edelstein
                        </Grid>
                    </Grid>
                    <Grid container style={{ marginTop: "-50px" }}>
                        <Grid item justify="center" xs={4}>
                            <Link to={{ pathname: `/about/` }}> About Me </Link>
                        </Grid>
                        <Grid item justify="center" xs={4}>
                            Projects
                    </Grid>
                        <Grid item justify="center" xs={4}>
                            Other
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;