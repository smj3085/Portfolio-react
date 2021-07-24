import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import "./styles/styles.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
           
              <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/projects" component={Projects}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div> 
      </Router>

    );
  }
  
export default App;