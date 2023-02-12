import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../images/slider-one.jpg'
import slider2 from '../images/slider-two.jpg'
import man1 from '../images/man1.png'
import './Home.css'
import { Link } from 'react-router-dom';
import signature from '../images/signature.png'
import woman from '../images/woman1.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import doctor1 from '../images/image-2.jpg'
import doctor2 from '../images/woman2.jpg'
import doctor3 from '../images/woman3.jpg'
import doctor4 from '../images/woman4.jpg'

const doctorData1 = [
    {position: "Pediatrician", name: "Sussie Wolf", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, debitis.", img: doctor1},
    {position: "Pediatrician", name: "Sussie Wolf", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, debitis.", img: doctor2},
    {position: "Pediatrician", name: "Sussie Wolf", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, debitis.", img: doctor1},
    {position: "Pediatrician", name: "Sussie Wolf", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, debitis.", img: doctor2},
]

const doctorData2 = [
    { position: "Pediatrician", name: "Mussie Wolf", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, debitis.", img: doctor3 },
    { position: "Pediatrician", name: "Mussie Wolf", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, debitis.", img: doctor4 },
    { position: "Pediatrician", name: "Mussie Wolf", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, debitis.", img: doctor3 },
    { position: "Pediatrician", name: "Mussie Wolf", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, debitis.", img: doctor4 },
]

const Home = () => {
    return (
        <div className='bg-white'>
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


            {/* boxes ------------------------------------------------------ */}

            <div className="container text-white mb-5">
                <div className="row g-0 ">

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

            {/*----------------------------- second part ----------------------- */}
            <div className='my-5 py-5 bg-white'>
                <div className="container fira">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src={man1} className="w-100" alt="" />
                        </div>
                        <div className="col-12 col-md-6">
                            <h3>Introduction of Homeopathy</h3>
                            <h5>Christian Friedrich Samuel Hahnemann</h5>
                            <p>M.D. (1755-1843)</p>
                            <h3>CREATION OF HOMEOPATHY:</h3>
                            <p>Hahnemann was dissatisfied with the state of medicine in his time, and particularly objected to practices such as bloodletting. He claimed that the medicine he had been taught to practice sometimes did the patient more harm than good: My sense of duty would not easily allow me to treat the unknown pathological state of my suffering brethren with these unknown medicines. The thought of becoming in this way a murderer or malefactor towards the life of my fellow human beings was most terrible to me, so terrible and disturbing that I wholly gave up my practice in the first years of my married life and occupied myself solely with chemistry and writing. After giving up his practice around 1784, Hahnemann made his living chiefly as a writer and translator, while resolving also to investigate the causes of medicine's alleged errors. While translating William Cullen's A Treatise on the Materia Medica, Hahnemann encountered the claim that cinchona, the bark of a Peruvian tree, was effective in treating malaria because of its astringency. Hahnemann believed that other astringent substances are not effective against malaria and began to research cinchona's effect on the human body by self-application. <Link>Learn More</Link> </p>
                        </div>
                    </div>
                </div>
            </div>

            {/*----------------------- our team part ----------------------- */}
            <div>
                <div className="our-team">
                    <div className="container fira">
                        <div className="row align-items-end">
                            <div className="col-12 col-lg-7">
                                <div className='py-5 text-center text-lg-start'>
                                    <p className='m-0' style={{ fontSize: "20px" }}>Dr. Stephanie Wosniack</p>
                                    <div className="name-line mb-5 d-none d-lg-block"></div>
                                    <h1 className='fw-bold mb-4'>OUR <span style={{ color: '#1B1285'}}>TEAM</span></h1>
                                    <p style={{fontSize: "18px"}}>
                                        Dr. Stephanie Wosniack is is dedicated to providing her patients with the best possible care. We at MediCare are focused on helping you. After receiving successful care for various aches and pains over the years, Dr. Woshiack found her calling to help others get well.
                                    </p>

                                    <img src={signature} alt="" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-5">
                                    <div className='text-md-center'>
                                        <img src={woman} alt="" />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* our doctors slider large screen---------------------------- */}
            <div className='py-5'>
                <div className="container">
                    <div>
                        <p className='m-0 fira fw-semibold' style={{ fontSize: "35px" }}>OUR DOCTOR</p>
                        <div className="name-line mb-5 d-none d-lg-block"></div>
                    </div>

                    
                        <Carousel>
                            <Carousel.Item interval={3000}>
                                <div className='d-flex gap-3'>
                            {doctorData1.map(data =>
                                    <Card>
                                        <Card.Img variant="top" src={data.img}/>
                                        <Card.Body>
                                            <Card.Title>{data.name}</Card.Title>
                                            <Card.Text>
                                                {data.text}
                                            </Card.Text>
                                            <Button variant="primary">Appointment</Button>
                                        </Card.Body>
                                    </Card>
                            )}

                                   
                                </div>

                            </Carousel.Item>


                            <Carousel.Item interval={3000}>
                            <div className='d-flex gap-3'>
                            {doctorData2.map(data =>
                                    <Card>
                                        <Card.Img variant="top" src={data.img}/>
                                        <Card.Body>
                                            <Card.Title>{data.name}</Card.Title>
                                            <Card.Text>
                                                {data.text}
                                            </Card.Text>
                                            <Button variant="primary">Appointment</Button>
                                        </Card.Body>
                                    </Card>
                            )}

                                   
                                </div>

                            </Carousel.Item>
                        </Carousel>
                    


                </div>
            </div>

        </div>
    );
};

export default Home;