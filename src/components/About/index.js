import { Grid } from '@material-ui/core';
import Sidebar from '../Sidebar'
import React from 'react';
import styles from './about.module.css';




const About = () => {

    return (
        <div>
            <Grid container spacing={12} justify="space-between">
                {/* col */}
                <Grid item xs={6} style={{ color: "black" }}>
                </Grid>
                {/* col 2 */}
                <Grid container xs={6} style={{ color: "black", height: "100vh" }} alignItems="flex-start" justify="flex-Start">
                    <Grid container justify="center" alignItems="center" style={{ paddingTop: "10px" }}>
                        <Grid item justify="flex-start" xs={4}>
                            <Sidebar></Sidebar>
                        </Grid>
                        <Grid className={styles.titleMain} item xs={8}>
                            About Me
                        </Grid>
                    </Grid>
                    <Grid container style={{ marginTop: "-50px" }}>
                        <Grid item justify="center" xs={4}>
                        </Grid>
                        <Grid item justify="center" xs={4}>
                        </Grid>
                        <Grid item justify="center" xs={4}>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default About;