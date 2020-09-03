import React from 'react';
import logo from './logo.svg';
import './index.css'
import './App.css';
import About from './components/About'
import Home from './components/Home'
import styles from "./App.module.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
        <Router>
          <div className={styles.gridWidth}>
            {/* <Route path="/about" exact component={About}/> */}
            <Route path="/project/:title" />
            <Route path="/projects/" />
            <Route path="/about/" exact component={About} />
            <Route path="/other/"/>
            <Route path="/" exact component={Home}/>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;


