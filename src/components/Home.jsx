import React, { useContext } from 'react';
import { Context } from './Context';
import Login from './Login';
import SignUp from './SignUp';
import Posts from './Posts';
import { Tabs, Tab } from 'react-bootstrap';
import './Home.scss';

const Home = () => {
    const { login } = useContext(Context);

    return !login.status ? (
        <Tabs>
            <Tab eventKey='login' title='Login'>
                <Login />
            </Tab>
            <Tab eventKey='signUP' title='Sign up'>
                <SignUp />
            </Tab>
        </Tabs>
    ) : (
        <Posts />
     );
}
 
export default Home;