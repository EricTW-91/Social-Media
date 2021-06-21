import React, { useState, useContext } from 'react';
import { Context } from './Context';
import { Form, Button } from 'react-bootstrap';
import './Login.scss';

const Login = () => {
    const { users, setLogin } = useContext(Context);
    const [loginUser, setLoginUser] = useState({ email: '', password: '' })
    
    const handleOnChange = (e) => {
        setLoginUser({...loginUser, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loginUser.email === '') {
            alert('Please enter an email!');
        } else if (loginUser.password === '') {
            alert('Please enter a password!');
        } else if (!users.some((obj) => obj.email === loginUser.email)) {
            alert('Incorrect email!');
        } else if (users.filter((obj) => obj.email === loginUser.email)[0].password !== loginUser.password) {
            alert('Incorrect password!');
        } else {
            setLogin({ status: true, user: users.filter((obj) => obj.email === loginUser.email)[0] })
        }
    }

    return (
        <>
            <Form className='login_form' onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type='email' name='email' placeholder='Email...' onChange={handleOnChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type='password' name='password' placeholder='Password...' onChange={handleOnChange}></Form.Control>
                </Form.Group>
                <Button variant='primary' type='submit'>Login</Button>
            </Form>
        </>
    )
}
 
export default Login;