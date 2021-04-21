import React from 'react';
import './home.css'
import Login from './Login';
import Button from 'react-bootstrap/Button'
import {
	BrowserRouter as Router,

	Link,
	Route,
	Switch,
	useRouteMatch
  } from "react-router-dom";
 

const Services = () => {
	let {  url } = useRouteMatch();
	
    return ( 
        
<div className="divitwo">
<Router>

               <div className="blue-overlay">
				<div className="containerone">
					<span className="pull_quote-large">If you just need an app that will let you make lists and check things off, then WorkFlowy is an excellent solution. It lacks some standard to-do app features such as due dates, but it’s still a useful app for tracking and completing quick to-do items.

</span>
      
          <br></br>

         
	  <h3>please login first</h3>
    <br></br>
           <Button variant="outline-light" id="btns" ><Link to={`${url}/login`} style={{textDecoration:"none"}}>click here to Login</Link> </Button>
          <br></br>
          <br></br>

        
      
        <Switch>
        
          <Route path={`${url}/login`}>
            <Login />
          </Route>
        </Switch>
      

		
				
				</div>
			</div>
      </Router>	

            </div>

        
     );
	 
  
	  
	
}

 
export default Services;