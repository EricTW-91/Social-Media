import React, { useState, useContext } from 'react';
import { Context } from './Context';
import { Link } from 'react-router-dom';

import LikeButton from './LikeButton';

import { Container, Row, Col, Modal, Image, Form, Button } from 'react-bootstrap';

import './Posts.scss';

import { IconContext } from "react-icons";
import { FaHeart, FaComments } from 'react-icons/fa';

import avatar from '../images/user.png';

const Posts = () => {
    const { login, setLogin } = useContext(Context);

    const [selImage, setSelImage] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (index) => {
        setSelImage(index);
        setShow(true);
    };

    const handleDeletePost = () => {
        let arr = login.user.posts;

        // delete the selected post from array
        arr.splice(selImage, 1);

        setShow(false);
        setSelImage(0);

        // set login state using computed property name [login.user.posts]
        setLogin({...login, [login.user.posts]: arr});
    }

    const handleSubmitComment = (e) => {
        e.preventDefault();

        let arr = login.user.posts;

        // add the comment if informed
        if (e.target.comment.value !== '') {
            arr[selImage].comments.push(e.target.comment.value)

            setLogin({...login, [login.user.posts]: arr});
            e.target.comment.value = ''; 
        }
    }

    return (
        <>
            <section className="profile-section">
                <Container>
                    <Row className="align-items-center">
                        <Col sm={4} lg={3} className="text-center">
                            <Image src={avatar} roundedCircle alt="avatar" />
                        </Col>

                        <Col sm={8} lg={9}>
                            <h1 className="mb-2">{login.user.userName}</h1>
                            <h2 className="mb-3"><span className="fw-bold">{login.user.posts.length}</span> posts</h2>
                            <Link className="button" to='/Upload'>create post</Link>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="separator-section">
                <Container>
                    <div className="separator"></div>
                </Container>
            </section>

            <section className="posts-section">
                <Container>
                    <Row>
                        {login.user.posts.map((post, index) => {
                            return (
                                <Col key={post.id} sm={4} lg={3} className="card-posts">
                                    <Image src={post.img} alt={post.title} />

                                    <div className="card-overlay" onClick={() => handleShow(index)}>
                                        <IconContext.Provider value={{ size: "1.2em", color: "white" }}>
                                            <FaHeart />
                                            <FaComments style={{ marginLeft: "25px" }} />
                                        </IconContext.Provider>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </section>

            {login.user.posts.length > 0 ?
            (
                <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col md={8} className="modal-image">
                                    <Image src={login.user.posts[selImage].img} alt={login.user.posts[selImage].title} />
                                </Col>

                                <Col md={4} className="modal-details">
                                    <div className="modal-intro p-3">
                                        <h3 className="mb-2">{login.user.posts[selImage].title}</h3>
                                        <LikeButton imgIdx={selImage} />
                                        <button className="button" onClick={handleDeletePost}>delete post</button>
                                    </div>

                                    <div className="modal-comments p-3">
                                        {login.user.posts[selImage].comments.length > 0 ?
                                        (
                                            login.user.posts[selImage].comments.map((comment, index) => {
                                                return <p key={index} className="mb-2">{comment}</p>
                                            })
                                        ) : (
                                            ''
                                        )}
                                    </div>

                                    <div className="modal-form p-3">
                                        <Form onSubmit={handleSubmitComment}>
                                            <Form.Row className="d-flex align-items-center">
                                                <Col xs={10}>
                                                    <Form.Control name="comment" placeholder="add a comment..." />
                                                </Col>
                                                <Col className="text-end">
                                                    <Button variant='link' type='submit'>post</Button>
                                                </Col>
                                            </Form.Row>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            ) : (
                ''
            )}
        </>
     );
}
 
export default Posts;