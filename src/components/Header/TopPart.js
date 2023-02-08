import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import './TopPart.css'

const TopPart = () => {
    return (
        <div style={{ backgroundColor: '#D3D3D3'}}>
            <div className="container">
                <div className='fira d-flex justify-content-end' style={{ color: '#1B1285'}}>
                    <div className='d-flex justify-content-center align-items-center pe-4'>
                        <MdMarkEmailRead></MdMarkEmailRead>
                        <Link>homeodoctor@support.com</Link>
                    </div>
                    <div className='d-flex justify-content-center align-items-center pe-4'>
                        <AiFillPhone></AiFillPhone>
                        <Link>12345678911</Link>
                    </div>
                    <div className='d-flex justify-content-center align-items-center pe-4'>
                        <FaUserCircle></FaUserCircle>
                        <Link>Login/Registration</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopPart;