import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const Register = () => {

    return (
        <div className='d-flex justify-content-center my-5'>
            <div className='my-5 w-25 d-flex justify-content-center flex-column'>
                <div>
                    <h2 className='my-3 text-primary'>Sign Up To Jersey Shop</h2>
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className=' text-primary'>Your Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='text-primary'>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-primary'>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"

                            label={<>
                                <Link className=' text-primary' to='/terms'>Accept Terms & Condition</Link>
                            </>} />
                    </Form.Group>
                    <Button className=' text-primary' variant="primary" type="submit">
                        Sign Up
                    </Button>
                    <>


                        <p className='text-muted App my-3 text-primary'>Other Login Method</p>
                        <div className='d-flex flex-column'>
                            <Button className="my-2" variant="primary">Login With Google</Button>

                            <Button className="my-2" variant="primary">Login With Github</Button>
                        </div>
                    </>
                    <p className='my-3 text-primary'>
                        Already Have an Account on Jersey Shop?
                        <Link className=' text-primary' to={"/signin"}>
                            Please Login
                        </Link>
                    </p>
                </Form>
            </div>
        </div>
    );
};

export default Register;