import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Resume from "./components/Resume";
// import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import ScrollToTop from "./components/ScrollToTop";

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navbar />
            <Switch>
             <Route path="/" component={Home} exact/>
             {/* <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/projects" component={Projects}/>
             <Route path="/resume" component={Resume}/> */}
           </Switch>
          <Footer />
        </div> 
      </BrowserRouter>
    );
  }
}
  
  export default App;