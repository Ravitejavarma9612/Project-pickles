import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carouseladvrt.css';
const images= {
  img1 : "https://cdn.shopify.com/s/files/1/0042/9909/6134/products/Boneless-Andhra-Chicken-Pickle-8_800x.jpg?v=1555979796",
  img2 : 'https://vaya.in/recipes/wp-content/uploads/2019/01/Mutton-pickle.jpg',
  img3 : 'https://i.ytimg.com/vi/YfGLZP7Q2Hk/maxresdefault.jpg',
  width: "100%;",
  height: "600px"
}
;
const Carouseladvrt = () => {
    return(
      <div className='carousel'>
        <Carousel controls={false} prevLabel='' nextLabel=''> 
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={images.img1}
      alt="First slide" height={images.height} width ={images.width}
    />
    <Carousel.Caption>
      <p>ava</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={images.img2}
      alt="Second slide" height={images.height} width ={images.width}
    />
    <Carousel.Caption>
      <p>2nd</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={images.img3}
      alt="Third slide" height={images.height} width ={images.width}
    />
    <Carousel.Caption>
      <p>3rd</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
 );
}
export default Carouseladvrt;