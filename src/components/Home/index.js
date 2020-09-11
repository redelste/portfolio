
import { Grid } from '@material-ui/core';
import Sidebar from '../Sidebar'
import React from 'react';
import styles from './home.module.css';

import {
    Link
} from "react-router-dom";



const Home = () => {
    return (
        <div>
            <Grid container spacing={1} justify="space-between">
                {/* col */}
                <Grid item xs={6} style={{ color: "black" }}>
                </Grid>
                {/* col 2 */}
                <Grid container xs={6} style={{ color: "black", height: "100vh" }} alignItems="flex-start" justify="flex-Start">
                    <Grid container justify="center" alignItems="center" style={{ paddingTop: "10px" }}>
                        <Grid item xs={4}>
                            <Sidebar></Sidebar>
                        </Grid>
                        <Grid className={styles.titleMain} item xs={8}>
                        {/*  */}
                            Ryan Edelstein
                        </Grid>
                    </Grid>
                    <Grid className={styles.linkGroup} container justify="center">
                        <Grid item xs={4}>
                            <Link className={styles.buttonAbout} to={{ pathname: `/About/` }}>
                                About Me
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Link className={styles.buttonProjects} to={{ pathname: `/Projects/` }}>
                                Projects
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Link className={styles.buttonProjects} to={{ pathname: `/Other/` }}> Other </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;