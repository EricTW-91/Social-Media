import React, { useState, useEffect, useContext } from 'react';
import { Context } from './Context';
import Post from './Post';
import { Link } from 'react-router-dom';

const Posts = () => {
    const { login } = useContext(Context);

    return (
        <>
            <h1>{login.user.userName}</h1>
            <Link to='/Upload'>Creat a post</Link>
        </>
     );
}
 
export default Posts;