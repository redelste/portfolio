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
            <Route path="/project/:title" />
            <Route path="/projects/" exact component={Projects}/>
            <Route path="/about/" exact component={About} />
            <Route path="/other/" exact component={Other}/>
            <Route path="/Home" exact component={Home}/>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;


