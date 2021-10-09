import React from "react";
import './App.css'
import {
  BrowserRouter as Router,Switch,
  Route,
 
} from "react-router-dom";
 import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from "./Pages/Home";
import About from "./Pages/About";
 
import Navbar from "./Pages/Navbar";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <>
    
    <Router>
    <Navbar />
    
    <Switch>
    
      <Route path="/" exact ><Home /></Route>
      <Route path="/about" ><About /> </Route>
      <Route path="/contact"><ContactUs /> </Route> 
    </Switch>
        
    </Router>
    </>
  );
}

export default App;
