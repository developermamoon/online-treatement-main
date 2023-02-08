import React from 'react';
import './ContactUs.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const ContactUs = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row">

                    <div className="col-12 col-md-6 fira">
                        <div className='p-5'>
                            <h2>CALL US</h2>
                            <hr />
                            <p className='mt-4'>You have an event and want to impress your guests and visitors? All you have to do is submit your application and we promise that you will get the highest degree of organization Submit your request now! We provide catering services for large and small companies and institutions. Our staff is made up of qualified individuals and a highly qualified and experienced chef Weddings, parties and special occasions</p>
                            <p className='fw-bold'>Phone : +88 12345678901 <br /> Email : info@homeodoctor.com</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className='p-5'>
                            <h2>OUR OFFICE</h2>
                            <hr />
                            <p className='mt-4'>Dhaka Bangladesh - asdklfj asldkfj aslkf aadsf - asdf aklsjdf alksdfadsf af ljasf. Use this form for immediate follow-up if you would like us to serve you.. Which type of our professional services are most important to you? Dhaka, Bangladesh <br /> <br />
                            <span style={{fontSize: "18px"}}>Dhaka, Bangladesh</span>
                            </p>
                        </div>
                    </div>

                </div>

                <div className='my-5 p-5 rounded-4 shadow fira' style={{ backgroundColor: "F2F6F8"}}>
                    <h3 className='text-center'>I hope your honorable person will fill out this form to serve you to the fullest</h3>

                    <form action="">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        </div>

                        <Button variant="danger" type="submit" style={{ backgroundColor: '#FF0000', fontSize: "22px", fontWeight: "semibold" }}>
                            Send Message
                        </Button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;