import React from 'react';


import Button from 'react-bootstrap/Button'
import './home.css'
import {
	BrowserRouter as Router,
	
	Route,
  Link,
	Switch,
	useRouteMatch
  } from "react-router-dom";

import Login from './Login';



const Signout = () => {
    let { url } = useRouteMatch();

    
    return ( 
        
<div className="divi">
               <div className="blue-overlay">
				<div className="containerone">
					<span className="pull_quote-large">

</span>
					
					<Router>
      
          <h3>you are logged out now</h3>

         <hr/>
           <Button variant="outline-light" style={{fontWeight:"bold"}}><Link to={`${url}/login`} style={{textDecoration:"none"}}>click here to Login</Link> </Button>
          
        
        <hr />
        <Switch>
        
          <Route path={`${url}/login`}>
            <Login />
          </Route>
        </Switch>
      
    </Router>	

		
				
				</div>
			</div>
            </div>


     );
}
 
export default Signout;