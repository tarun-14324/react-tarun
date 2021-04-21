import React from 'react';
import {Link, Router} from 'react-router-dom';
import Button from 'react-bootstrap/Button'

class Aboutt {
  render() {
    
    return <div>
      <h4>About</h4>
      <p>This is About page.</p>
    
       <Router>
      <Link to="/About"><Button variant="outline-primary" borderRadius="80px">
Click here for more
            </Button>
            </Link>
            </Router> 
      
    </div>
  }
}

export default Aboutt;