import React from 'react';
import './home.css';
import Navbar from 'react-bootstrap/Navbar'
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Dash from './Dash';

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
          
            <li><NavLink to={'/home'} className="nav-link" > Home </NavLink></li>
            
           
          
            <li><NavLink to={'/login'} className="nav-link" > Sign In </NavLink></li>
            <li><NavLink to={'/about'} className="nav-link" >About</NavLink></li>
            <li><NavLink to='/signout'  className="nav-link"  onClick={()=>localStorage.clear} >Sign Out</NavLink></li>

          </ul>
          <div className="addthis_inline_share_toolbox" id="share"></div>

          </nav>
          <hr />
          <Switch>
          <Route exact path='/' component={Dash} />
              <Route exact path='/home' component={Main} />
            
              <Route exact path='/login' component={Login} />
              <Route exact path='/about' component={About} />
            
              <Route path='/signout' component={Signout} />
          </Switch>
        </div>
      </Router>
 
        </div>
    );
}
 
export default NaviBar;