import React, { Component } from 'react';
import './home.css';

class About extends Component {
  render() {
    return (
        <div className="about">

<h1> Todo App:</h1>


  
  <ul >
  <li className="list">
  <b>Reorder Tasks </b>– This one is really simple. One of the advantages of an app-based todo list is that you are not limited by ink on paper. 
  </li>
  <li className="list"><b>Prioritization </b>– This is another basic time management feature. It amazes me how many apps don’t allow prioritization of tasks.</li>
  <li className="list"><b>Quick Entry/Capture </b>– Todo apps should always be ready to quickly  capture a random task. </li>
  <li className="list"><b>Simple UI </b>– Following on from quick capture, overall the app should be simple. Simple to use.</li>
  <li className="list"><b>Pictures on Tasks </b>– This is one of my favorites, and I feel it is underestimated by most todo apps. </li>
  <li className="list"><b>Sync </b>– Again, one of the benefits of an electronic list should be the ability to sync is across all platforms and locations that the user works. </li>
  <li className="list"><b>Today List </b>– You can’t do it all. And one of the best ways to “get work done” is to only concentrate on your top tasks for today. </li>
</ul>
  

        </div>
    );
  }
}

export default About;