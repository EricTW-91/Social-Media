import React, { useState, useContext } from 'react';
import { Context } from './Context';
import { Form, Button } from 'react-bootstrap';
import { v1 as uuidv1 } from 'uuid';
import './SignUp.scss'

const SignUp = () => {
    const { users, setUsers } = useContext(Context);
    const [signUpUser, setSignUpUser] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPW: ''
    });

    const handleSubmit = (e) => {
        if (signUpUser.userName === '' || signUpUser.email === '' || signUpUser.password === '' || signUpUser.confirmPW === '') {
            e.preventDefault();
            alert('Missing Info!')
        } else if (signUpUser.password !== signUpUser.confirmPW){
            e.preventDefault();
            alert('Please check your password!')
        } else {
            setUsers([...users, {
                id: uuidv1(),
                userName: signUpUser.userName,
                email: signUpUser.email,
                password: signUpUser.password,
                avatar: '',
                posts: []
            }])
            alert('Success!')
        }
    }

    const handleOnChange = (e) => {
        setSignUpUser({ ...signUpUser, [e.target.name]: e.target.value})
    }

    return (
        <>
            <Form className='signUp_form' onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type='text' name='userName' onChange={handleOnChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type='email' name='email' onChange={handleOnChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type='password' name='password' onChange={handleOnChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control type='password' name='confirmPW' onChange={handleOnChange}></Form.Control>
                </Form.Group>
                <Button variant='primary' type='submit'>Sign Up</Button>
            </Form>
        
        </>
     );
}
 
export default SignUp;