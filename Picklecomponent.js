import React from 'react';
import './Picklecomponent.css';
import { Button } from '@material-ui/core';

function Picklecomponent(props) {
    return (
        <div className='picklecontainer'>
            <div className='pickleimage'>
                   <img src={props.image}
                    alt="chickenpickle"  />
              </div>
              <div  className="pickle_title"> 
                  <strong>
                    {props.title}
                  </strong>
              </div>
              <div  className="pickle_type">
                  <small>
                     {props.type} 
                  </small>
              </div>
              <div className='pickle_rating'>
              {Array(props.rating).fill().map((_,i) => <p>⭐</p> )
           }
              </div>
              <div  className="pickle_pricing">
              <strong> ${props.price}</strong>
              </div>
              <div className="pickle_addtobasket">
              <Button variant="contained" >
 Add to basket
</Button>
              </div>

        </div>
    )
}

export default Picklecomponent;
