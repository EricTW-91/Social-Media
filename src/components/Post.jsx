import React, { useState, useEffect, useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Context } from './Context';

const Post = () => {
    const { posts } = useContext(Context);

    return (
        <Card>
            <Card.Body>
                <Card.Title>{ posts[0].title }</Card.Title>
                <Card.Img></Card.Img>
                <Card.Text></Card.Text>

            </Card.Body>
        </Card>
        // <img src={require('./img/dog.jpeg') } alt=''></img>
     );
}
 
export default Post;