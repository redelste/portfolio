
import { Grid } from '@material-ui/core';
import Sidebar from '../Sidebar'
import React from 'react';
import styles from './projects.module.css'
// import styles from './home.module.css';




const Projects = () => {
    return (
        <div>
            <Grid container spacing={12} justify="space-between">
                {/* col */}
                <Grid item xs={6} style={{ color: "black" }}>
                </Grid>
                {/* col 2 */}
                <Grid container xs={6} style={{ color: "black", height: "100vh" }} alignItems="flex-start" justify="flex-Start">
                    <Grid container justify="center" alignItems="center" style={{ paddingTop: "10px" }}>
                        <Grid item xs={4}>
                            <Sidebar></Sidebar>
                        </Grid>
                        <Grid className={styles.titleMain} item xs={8} style={{position: "relative", paddingLeft: "7%"}}>
                            Projects
                        </Grid>
                        <Grid item xs={4}>
                            <img alt="" className={styles.projectIcon} />
                        </Grid>
                        <Grid item xs={4}>
                            <img alt="" className={styles.projectIcon}/>

                        </Grid>
                        <Grid item xs={4}>
                            <img alt="" className={styles.projectIcon}/>

                        </Grid>
                    </Grid>
                    <Grid container style={{ marginTop: "-50px" }}>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Projects;