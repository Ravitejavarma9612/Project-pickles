import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <h1>
           MAMA pickles
           </h1>
                <div className="footer_slogan">
                   <p> our most unhappy customers are your greatest source of learning.
                </p>
                </div >
                <div className='footer_colomns'>
                    <div className='footer_contacts'>
                        <h2> Contact Us</h2>
                    <small>Email:mamapickles@gmail.com</small> <br />
                    <small>Contact: +91 9848022335</small> 
                    <small>
                        <p>Address<br />
                        Clocktower st,Bhimavaram<br />
                        WestGodavari,Andhrapradesh<br />
                        India <br />
                        </p>     
                    </small>
                    </div>
                    <div className='footer_overview'>
                        <h2>Overview</h2>
                        <a href="https://google.com">Google</a><br/>
                        <a href="https://facebook.com">Facebook</a><br/>
                        <a href="https://twitter.com">twitter</a>
                        </div>
                     <div className='footer_Media'>
                         <h2> Media Partners</h2>
                         <img src="https://www.codot.gov/safety/impaired-driving/planahead/2011-assets/android-market-icon.png/@@images/image"
                      alt="no img"  width="50%"  />
                     </div>
                </div>
        </div>
    )
}

export default Footer;
