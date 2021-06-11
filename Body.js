import React from 'react';
import './Body.css';
import Carouseladvrt from './Carouseladvrt';
import Picklecomponent from './Picklecomponent';

function Body() {

    return (
        <div className= 'body_container'>
            <h1>Welcome to MAMA World.....</h1>
            <div className="body_advertisement"  >
               <Carouseladvrt />    
             </div>
             <div className='body_section'>
             <h1> pick your yummy non veg</h1>
     {/* nonveg category section __________________________________________________________________*/}              
             <div className='body_nonvegsection'>
             <Picklecomponent 
             id={1}
             image={"https://2.bp.blogspot.com/-z2vW_XbTxi0/WZSSjfjak5I/AAAAAAAAI74/gNKha8EfDOQQRGfk6MSxkALkHYqMmgLaACLcBGAs/s1600/0000000000000A.jpg"}
             title={" Godavari Chicken pickle 200g"}
             type={"NON-veg"}
             rating={4}
             price={20}
             />
             <Picklecomponent 
             id={2}
             image={"https://2.bp.blogspot.com/-z2vW_XbTxi0/WZSSjfjak5I/AAAAAAAAI74/gNKha8EfDOQQRGfk6MSxkALkHYqMmgLaACLcBGAs/s1600/0000000000000A.jpg"}
             title={" Godavari Chicken pickle 200g"}
             type={"NON-veg"}
             rating={4}
             price={20}/>
             <Picklecomponent 
             id={3}
             image={"https://2.bp.blogspot.com/-z2vW_XbTxi0/WZSSjfjak5I/AAAAAAAAI74/gNKha8EfDOQQRGfk6MSxkALkHYqMmgLaACLcBGAs/s1600/0000000000000A.jpg"}
             title={" Godavari Chicken pickle 200g"}
             type={"NON-veg"}
             rating={4}
             price={20}/>
             <Picklecomponent
             id={4}
             image={"https://2.bp.blogspot.com/-z2vW_XbTxi0/WZSSjfjak5I/AAAAAAAAI74/gNKha8EfDOQQRGfk6MSxkALkHYqMmgLaACLcBGAs/s1600/0000000000000A.jpg"}
             title={" Godavari Chicken pickle 200g"}
             type={"NON-veg"}
             rating={4}
             price={20} />
             <Picklecomponent 
             id={5}
             image={"https://2.bp.blogspot.com/-z2vW_XbTxi0/WZSSjfjak5I/AAAAAAAAI74/gNKha8EfDOQQRGfk6MSxkALkHYqMmgLaACLcBGAs/s1600/0000000000000A.jpg"}
             title={" Godavari Chicken pickle 200g"}
             type={"NON-veg"}
             rating={4}
             price={20}/>
             <Picklecomponent
             id={6}
             image={"https://2.bp.blogspot.com/-z2vW_XbTxi0/WZSSjfjak5I/AAAAAAAAI74/gNKha8EfDOQQRGfk6MSxkALkHYqMmgLaACLcBGAs/s1600/0000000000000A.jpg"}
             title={" Godavari Chicken pickle 200g"}
             type={"NON-veg"}
             rating={4}
             price={20} />
             <Picklecomponent  
             id={7}
             image={"https://2.bp.blogspot.com/-z2vW_XbTxi0/WZSSjfjak5I/AAAAAAAAI74/gNKha8EfDOQQRGfk6MSxkALkHYqMmgLaACLcBGAs/s1600/0000000000000A.jpg"}
             title={" Godavari Chicken pickle 200g"}
             type={"NON-veg"}
             rating={4}
             price={100}
             />
             </div>
             <h1> pick your yummy  veg</h1>
   {/* veg category section ______________________________________________ */}      
             <div className="body_vegsection">
             <Picklecomponent 
             id={1}
             image={"https://2.bp.blogspot.com/-z2vW_XbTxi0/WZSSjfjak5I/AAAAAAAAI74/gNKha8EfDOQQRGfk6MSxkALkHYqMmgLaACLcBGAs/s1600/0000000000000A.jpg"}
             title={" Godavari Chicken pickle 200g"}
             type={"veg"}
             rating={4}
             price={20}
             />
             <Picklecomponent 
             id={2}
             image={"https://img1.exportersindia.com/product_images/bc-full/2019/9/6606530/non-vegetarian-pickles-1567516306-5065202.jpeg"}
             title={" Godavari Chicken dry pickle 200g"}
             type={"veg"}
             rating={3}
             price={35}/>
             <Picklecomponent 
             id={3}
             image={"https://2.bp.blogspot.com/-z2vW_XbTxi0/WZSSjfjak5I/AAAAAAAAI74/gNKha8EfDOQQRGfk6MSxkALkHYqMmgLaACLcBGAs/s1600/0000000000000A.jpg"}
             title={" Godavari Chicken pickle 200g"}
             type={"veg"}
             rating={4}
             price={20}/>
             <Picklecomponent
             id={4}
             image={"https://2.bp.blogspot.com/-z2vW_XbTxi0/WZSSjfjak5I/AAAAAAAAI74/gNKha8EfDOQQRGfk6MSxkALkHYqMmgLaACLcBGAs/s1600/0000000000000A.jpg"}
             title={" Godavari Chicken pickle 200g"}
             type={"veg"}
             rating={4}
             price={20} />
             <Picklecomponent 
             id={5}
             image={"https://2.bp.blogspot.com/-z2vW_XbTxi0/WZSSjfjak5I/AAAAAAAAI74/gNKha8EfDOQQRGfk6MSxkALkHYqMmgLaACLcBGAs/s1600/0000000000000A.jpg"}
             title={" Godavari Chicken pickle 200g"}
             type={"veg"}
             rating={4}
             price={20}/>
             <Picklecomponent
             id={6}
             image={"https://2.bp.blogspot.com/-z2vW_XbTxi0/WZSSjfjak5I/AAAAAAAAI74/gNKha8EfDOQQRGfk6MSxkALkHYqMmgLaACLcBGAs/s1600/0000000000000A.jpg"}
             title={" Godavari Chicken pickle 200g"}
             type={"veg"}
             rating={4}
             price={20} />
             <Picklecomponent  
             id={7}
             image={"https://2.bp.blogspot.com/-z2vW_XbTxi0/WZSSjfjak5I/AAAAAAAAI74/gNKha8EfDOQQRGfk6MSxkALkHYqMmgLaACLcBGAs/s1600/0000000000000A.jpg"}
             title={" Godavari Chicken pickle 200g"}
             type={"veg"}
             rating={4}
             price={100}
             />
             </div>
             <div className='Body most liked'>

             </div>
             </div>
        </div>
    );
}
  
export default Body;
