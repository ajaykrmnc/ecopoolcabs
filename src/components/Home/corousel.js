import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
const Corousel = () => {
    return ( <>
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 rounded"
          src="ooty-3.jpeg"
          alt="First slide"
          style={{height: '500px'}}
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 rounded"
          src="ooty-1.jpeg"
          alt="Second slide"
          style={{height: '500px'}}
        />
      </Carousel.Item>
      <Carousel.Item interval={7000}>
        <img
          className="d-block w-100 rounded"
          src="ooty-4.jpeg"
          alt="Third slide"
          style={{height: '500px'}}
        />
      </Carousel.Item>
    </Carousel>
    </> );
}
 
export default Corousel;