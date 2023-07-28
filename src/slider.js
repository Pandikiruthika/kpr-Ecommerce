import Carousel from 'react-bootstrap/Carousel';
import slide1 from "./image/slider-img1.jpg";
import slide2 from "./image/slider-img2.jpg";
import slide3 from "./image/slider-img3.jpg";
import slide4 from "./image/slider-img4.jpg";
import slide5 from "./image/slider1.jpg";
export default function slider() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide4}
          alt="four slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide5}
          alt="five slide"
        />
       
      </Carousel.Item>
    </Carousel>
  );
}

