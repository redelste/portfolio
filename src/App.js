import React from 'react';
import logo from './logo.svg';
import './index.css'
import './App.css';
import Asset1 from './assets/Asset3.svg'
import Projects from './components/Projects'
import { Grid } from '@material-ui/core';
import Sidebar from './components/Sidebar'

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
      <header className="App-header" style={{ backgroundImage: `url(${Asset1})`, backgroundRepeat: "no-repeat" }}>
        <Grid container spacing={1}>
          {/* col */}
          <Grid item xs={6} style={{ color: "black" }}>
          </Grid>
          {/* col 2 */}
          <Grid container xs={6} style={{ color: "black", height: "100vh" }}>
            <Sidebar></Sidebar>
            <Grid container justify="center" alignItems="flex-start" xs={9} style={{ paddingTop: "10px" }}>
              Ryan Edelstein
            </Grid>
            <Grid container style={{ marginTop: "-50px" }}>
              <Grid item xs={4}>
                About
              </Grid>
              <Grid item xs={4}>
                Projects
              </Grid>
              <Grid item xs={4}>
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


