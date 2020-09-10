import React from 'react';
import './index.css'
import './App.css';
import About from './components/About'
import Home from './components/Home'
import Other from './components/Other'
import styles from "./App.module.css"
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import Projects from './components/Projects';


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
      <header className={styles.backgroundImage}>
        <Router>
          <div className={styles.gridWidth}>
            {/* <Route path="/about" exact component={About}/> */}
            <Redirect exact from="/" to="/Home" />
            <Route path="/Project/:title" />
            <Route path="/Projects/" exact component={Projects}/>
            <Route path="/About/" exact component={About} />
            <Route path="/Other/" exact component={Other}/>
            <Route path="/Home" exact component={Home}/>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;


