import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../images/slider-one.jpg'
import slider2 from '../images/slider-two.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        style={{ height: "450px", objectFit: "cover"}}
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        style={{ height: "450px", objectFit: "cover" }}
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="container text-white">
                <div className="row g-0">

                    <div className="col-12 col-md-6 col-lg-3 p-3 paste-box-1">
                        <div className='p-4'>
                            <h4 className='pb-3'>Our Doctor</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
                            <button className='btn btn-primary blue-button'>Read More</button>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 p-3 paste-box-2">
                        <div className='p-4'>
                            <h4 className='pb-3'>Shop Page</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
                            <button className='btn btn-primary blue-button'>Read More</button>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 p-3 paste-box-3">
                        <div className='p-4'>
                            <h4 className='pb-3'>Our Book</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
                            <button className='btn btn-primary blue-button'>Read More</button>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 p-3 paste-box-4">
                        <div className='p-4'>
                            <h4 className='pb-3'>Our Medicine</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
                            <button className='btn btn-primary blue-button'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;