import React from 'react';
import "./Header.css";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className='header_container'>
            <Link to='/'>
            <img classname="header_logo " src="https://www.48hourslogo.com/48hourslogo_data/2018/09/11/77001_1536596240.png" alt="logo not available"/>
            </Link>
             
            <div className="header_title">
             <strong><h1>MAMA Pickles 
             </h1></strong> <br/>
             <small>Magic in spice</small>   
                      
             </div>
             <div className="header_searchbar">
        
            <input placeholder="search item here" type="text" />
             </div>
             <div className="header_cart">
                 <ShoppingBasketIcon /> <br/>
                 <h4>Cart</h4>
             </div>

             <div className="header_supportlinks">
             <strong>  Help??</strong>  
             </div>
             
            
        </div>
    )
}

export default Header;

