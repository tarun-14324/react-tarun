import React, { Component } from 'react';
import Logo from './image1.jpg'
import Logo2 from './image1.jpg'
import Footer from "./Footer"
import './Footer.css'

import './Homeimg.css'

class Home extends Component {
  render() {
    return (
      <div className="backimage">
        
  <section id="feat">
    <div class=" row">
      <div class="features-box col-lg-4 ">
        <i class="icon fas fa-check-circle fa-3x"></i>
        <h3>Easy to use.</h3>
        
      </div>
      <div class="features-box col-lg-4 ">
        <i class="icon fas fa-bullseye fa-3x"></i>
        <h3>Best way to all problems</h3>
      </div>
      <div class="features-box col-lg-4 ">
        <i class="icon fas fa-heart fa-3x"></i>
        <h3>Ability to plan your workflow.</h3>
      </div>
    </div>


  </section>

    
    <section>
    <img src={Logo} alt={Logo2} width="100%" height="600px" style={{borderRadius:"50px",marginTop:"50px" }} />
  </section>
  <div>
    <Footer/>
</div>
  </div>

        
        

        
    );
  }
}

export default Home;