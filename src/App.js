import React from 'react';
import logo from './logo.svg';
import './index.css'
import './App.css';
import Asset1 from './assets/Asset3.svg'
import Projects from './components/Projects'
import { Grid } from '@material-ui/core';
import Sidebar from './components/Sidebar'
import styles from "./App.module.css"

// What we need: 
// About me
// Projects
// Contact ==> could just be a footer? 
// ====================================
// future development --> link to blog (a project probably)
function App() {
  //  color of the "ASSET": #f7f2e8
  return (
    <div>
      {/* <Sidebar></Sidebar> */}
      <header className={styles.backgroundImage}>
        <Grid container spacing={1}>
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
                About Me
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
      </header>
    </div>
  );
}

export default App;


