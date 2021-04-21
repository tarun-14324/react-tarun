import React from "react";
import Products from "./Products";
import Services from "./Services";
import Home from './Home.js'
import './home.css'
import Features from './Features.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
  useRouteMatch
} from "react-router-dom";
import Appp from "./Appp";

export default function NestingExample() {
  return (
    <Router>
      <div className="pad">

        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/nestedpages">Nested pages</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>

        <hr />



        <Switch>
         <Route exact path='/home' > <Home></Home></Route> 

          <Route exact path="/contact">          

            <Products />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route path="/nestedpages">
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Details() {
  
  let { url } = useRouteMatch();

  return (
    <div>
      <h2>nested pages</h2>
      <ul>
         <li>
          <Link to={`${url}/features`}>features</Link>
        </li> 
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
      
      </ul>

      <Switch>
          
        
        <Route path={`${url}/features`}>
          <Features />
        </Route>
         
        <Route path={`${url}/components`}>
          <Appp />
        </Route>
         
  
        
      </Switch>

    </div>
  );

}
