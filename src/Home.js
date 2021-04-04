import React, { Component } from 'react';
import Logo from './image1.jpg'
import Logo2 from './image1.jpg'

import './Homeimg.css'

class Home extends Component {
  render() {
    return (
        <div className="bgimg" >
         
           <section id="features">
    <div class=" row">
      <div class="features-box col-lg-4 ">
      <i class="icon fa fa-thumbs-up fa-3x" aria-hidden="true"></i>
        <h3>User-Friendly.</h3>
        
      </div>
      <div class="features-box col-lg-4 ">
      <i class="icon fa fa-tasks fa-3x" aria-hidden="true"></i>
      <h3>Best way to all problems</h3>
       
      </div>
      <div class="features-box col-lg-4 ">
      <i class="icon fa fa-list-alt fa-3x" aria-hidden="true"></i>
        <h3>Ability to plan your workflow</h3>
       
      </div>
     
    </div>
    
    <img src={Logo} alt={Logo2} width="100%" height="600px" style={{borderRadius:"50px",marginTop:"50px" }} />
  </section>
 
  
        </div>
     
        
    );
  }
}

export default Home;