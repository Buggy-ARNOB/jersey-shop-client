import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';



const Login = () => {



    return (
        <div className='d-flex justify-content-center'>

            <div className='my-5 w-25 d-flex justify-content-center flex-column'>
                <div>
                    <h2 className='my-3 text-primary'>Login</h2>
                </div>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className=' text-primary'>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className=' text-primary'>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" required />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Login
                    </Button>

                    <p className='text-muted App my-3'>Other Login Method</p>
                    <div className='d-flex flex-column'>
                        <Button className="my-2" variant="primary">Login With Google</Button>

                        <Button className="my-2" variant="primary">Login With Github</Button>
                    </div>
                    <p className='my-3'>New to Jersey Shop? Please <Link to={"/signup"}>SignUp</Link></p>
                </Form>
            </div>

        </div>
    );
};

export default Login;