import React from 'react';
import './home.css';
import Navbar from 'react-bootstrap/Navbar'
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Home from './Home.js';

import About from './About.js';
import Main from './Main.js';
import Login from './Login'
import Signout from './Signout';


const NaviBar = () => {
    return (  
        <div>
         <Router>
        <div>
     
          <nav className="navbar navbar-expand-lg navbar-light bg-light" >
          <Navbar.Brand href="/" className="Navbar">Todo Tasks</Navbar.Brand>
          <ul className="navbar-nav mr-auto">
          
            <li><NavLink to={'/home'} className="nav-link" activeClassName="btn btn-primary"> Home </NavLink></li>
            
           
          
            <li><NavLink to={'/login'} className="nav-link" activeClassName="btn btn-primary"> Sign In </NavLink></li>
            <li><NavLink to={'/about'} className="nav-link" activeClassName="btn btn-primary">About</NavLink></li>
            <li><NavLink to='/sign'  className="nav-link" activeClassName="btn btn-primary" onClick={()=>localStorage.clear} >Sign Out</NavLink></li>

          </ul>
          </nav>
          <hr />
          <Switch>
          <Route exact path='/' component={Home} />
              <Route exact path='/home' component={Main} />
            
              <Route exact path='/login' component={Login} />
              <Route exact path='/about' component={About} />
            
              <Route path='/sign' component={Signout} />
          </Switch>
        </div>
      </Router>
 
        </div>
    );
}
 
export default NaviBar;