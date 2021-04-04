import React from 'react';
import './ListItems.css';

import FlipMove from 'react-flip-move';



function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="tasks" key={item.key}>
           
     <p>
          <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
             
        <span>
       
        <button className="favicons" onClick={() => {
            props.deleteItem(item.key)
        }} >Delete</button>
        </span>
     </p>
     
    </div>})
    return <div> 

        <FlipMove duration={300} easing="ease-in-out">
        
 {listItems}    

        </FlipMove>
        

    
    </div>;
  }

  export default ListItems;
