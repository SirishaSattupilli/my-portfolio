import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slide1 from '../../assets/carousel/slide1.webp'
import slide2 from '../../assets/carousel/slide2.webp'
import slide3 from '../../assets/carousel/slide3.webp'
import './MyCarousel.css'

const MyCarousel = () => {
    return (
        <div id="home">
            <Carousel controls={false} indicators={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={slide1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={slide2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={slide3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default MyCarousel
