import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./my-carousal.style.css"
import ScrollDown from '../scroll-down/scroll-down.component'

import slide1 from '../../assets/img/carousal/slide1.webp'
import bg1 from '../../assets/img/carousal/bg1.jpg'
import bg2 from '../../assets/img/carousal/bg2.jpg'
import bg22 from '../../assets/img/carousal/bg22.jpg'
import bg3 from '../../assets/img/carousal/bg3.jpg'
import bg33 from '../../assets/img/carousal/bg33.jpg'

import slide2 from '../../assets/img/carousal/slide2.webp'
import slide3 from '../../assets/img/carousal/slide3.webp'

const MyCarousal = () => {
    return (
      <div id="home">

<Carousel controls={false} indicators interval={2500} pause={false}>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img "
      src={bg1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img "
      src={bg22}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img "
      src={bg33}
      alt="Third slide"
    />
  </Carousel.Item>

</Carousel>

<ScrollDown />
            
        </div>
    )
}

export default MyCarousal
