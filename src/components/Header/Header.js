import React from 'react';
import TopPart from './TopPart';
import logo from '../images/logo.png'
import './Header.css'
import { FaBars } from 'react-icons/fa';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div style={{ backgroundColor: "#8E8E8E"}}>
            <TopPart></TopPart>
            <div>
                <div className="header1 fira">
                    <input type="checkbox" id="header1-menu-bar" />
                    <label htmlFor="header1-menu-bar"><FaBars className='text-white'></FaBars></label>

                    <Link to='/'>
                        <img src={logo} className='ps-3 py-1 d-lg-none' style={{ width: '30%' }} alt="" />
                    </Link>

            


                        <nav className="navbar d-flex justify-content-center">

                        <Link to='/'>
                            <img src={logo} className='ps-3 py-1 d-none d-lg-block' style={{ width: '70%' }} alt="" />
                        </Link>

                            <ul>
                                <li><Link to='/'>Home</Link></li>

                                <li><span className='downArrow'><Link to='/pages'>Pages</Link> <RiArrowDropDownLine className='fs-3'></RiArrowDropDownLine></span>
                                    <ul>
                                        <li><Link to='/about-us'>About Us</Link></li>
                                        <li><Link to='/our-doctor'>Our Doctor</Link></li>
                                        <li><Link to='/faq'>FaQ</Link></li>
                                        <li><Link to='/others'>Others</Link></li>
                                        <li><Link to='/testimonial'>Testimonial</Link></li>
                                        <li><Link to='/error-page'>Page 404</Link></li>

                                    </ul>
                                </li>

                                <li><span className='downArrow'><Link to='/our-services'>Our Services</Link> <RiArrowDropDownLine className='fs-3'></RiArrowDropDownLine></span>
                                    <ul>
                                        <li><Link to='/why-online-treat'>Why Online Treat</Link></li>
                                        <li><Link to='/how-it-works'>How It Works</Link></li>
                                        <li><Link to='/disease'>Disease</Link></li>
                                        <li><Link to='/error-page'>Page 404</Link></li>

                                    </ul>
                                </li>

                                <li><span className='downArrow'><Link to='/study'>Study</Link> <RiArrowDropDownLine className='fs-3'></RiArrowDropDownLine></span>
                                    <ul>
                                        <li><Link to='/organon-of-medicine'>Organon Of Medicine</Link></li>
                                        <li><Link to='/materia-medica'>Materia Medica</Link></li>
                                        <li><Link to='/repertory'>Repertory</Link></li>
                                        <li><Link to='/practice-of-medicine'>Practice Of Medicine</Link></li>
                                        <li><Link to='/anatomy-physiology'>Anatomy Physiology</Link></li>
                                        <li><Link to='/research'>Research</Link></li>
                                        <li><Link to='/download-book'>Download Book</Link></li>

                                    </ul>
                                </li>

                                <li><span className='downArrow'><Link to='/testimonial'>Testimonial</Link> <RiArrowDropDownLine className='fs-3'></RiArrowDropDownLine></span>
                                    <ul>
                                        <li><Link to='/celebraties-testimonial'>Celebraties Testimonial</Link></li>
                                        <li><Link to='/doctors-testimonial'>Doctors Testimonial</Link></li>
                                        <li><Link to='/patients-testimonial'>Patients Testimonial</Link></li>
                                        <li><Link to='/video-testimonial'>Video Testimonial</Link></li>
                                        <li><Link to='/magazine-testimonial'>Magazine Testimonial</Link></li>
                                    </ul>
                                </li>

                                <li><Link to='/'>Shop</Link></li>

                                <li><span className='downArrow'><Link to='/blog'>Blog</Link> <RiArrowDropDownLine className='fs-3'></RiArrowDropDownLine></span>
                                    <ul>
                                        <li><Link to='/up-coming-event'>Up Coming Event</Link></li>
                                        <li><Link to='/video'>Video</Link></li>
                                        <li><Link to='/photo'>Photo</Link></li>
                                        <li><Link to='/event'>Event</Link></li>
                                        <li><Link to='/media'>Media</Link></li>
                                        <li><Link to='/knowledge-of-disease'>Knowledge Of Disease</Link></li>
                                        <li><Link to='/lecture'>Lecture</Link></li>

                                    </ul>
                                </li>

                                <li><Link to='/contact-us'>Contact Us</Link></li>


                                <button className='btn btn-primary me-3'>Quick Appointment</button>
                            </ul>


                        </nav>


            
                </div>
            </div>
        </div>
    );
};

export default Header;