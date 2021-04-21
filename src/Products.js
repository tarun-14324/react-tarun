import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './home.css';
const Products = () => {
    return ( 
        <div> 
            <Card className="text-center">
  <Card.Header><h1>Contact Us</h1>
</Card.Header>
  <Card.Body>
    <Card.Title>Get Organized</Card.Title>
    <Card.Text>
      With your  support  we can add more  additional content to the todo app.
    </Card.Text>
  <div >
   <Button variant="outline-info" className="contact"><a  href="mailto:lankatarun16@gmail.com">Email <i class="fa fa-envelope" aria-hidden="true"></i>
</a>
 </Button>
 </div>
 <div >
 <Button variant="outline-primary" className="contact"><a href="tel:123-456-7890" >Call Us <i class="fa fa-phone" aria-hidden="true"></i>
</a>
 </Button>
 </div>
  </Card.Body>
  
</Card>
            <div>

            </div>
        </div>
     );
}
 
export default Products;