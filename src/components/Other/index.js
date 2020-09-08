
import { Grid } from '@material-ui/core';
import Sidebar from '../Sidebar'
import React from 'react';
import katamari from '../../assets/Katamari.png'
import styles from './other.module.css'
// import styles from './home.module.css';




const Other = () => {
    return (
        <div>
            <Grid container spacing={12} justify="space-between">
                {/* col */}
                <Grid item xs={6} style={{ color: "black" }}>
                </Grid>
                {/* col 2 */}
                <Grid container xs={6} style={{ color: "black", height: "100vh" }} justify="flex-Start">
                    <Grid container justify="center" alignItems="flex-start" xs={9} style={{ paddingTop: "10px" }}>
                        <Grid item xs={4}>
                            <Sidebar></Sidebar>
                        </Grid>
                        <Grid item xs={8} style={{position: "relative", paddingLeft: "7%"}}>
                            Other
                        </Grid>
                        <Grid item xs={4}>
                            <img alt="" className={styles.projectIcon} src={katamari} />
                        </Grid>
                        <Grid item xs={4}>
                            <img alt="" className={styles.projectIcon} />

                        </Grid>
                        <Grid item xs={4}>
                            <img alt="" className={styles.projectIcon} />

                        </Grid>
                    </Grid>
                    <Grid container style={{ marginTop: "-50px" }}>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Other;