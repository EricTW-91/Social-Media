import React, { useState, useContext } from 'react';
import { Context } from './Context';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { v1 as uuidv1 } from 'uuid';
import './Upload.scss';

// Transfer the image object to url
const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    })
}

const Upload = () => {
    const { login, setLogin } = useContext(Context);
    const [content, setContent] = useState({ title: '', img: '' });
    const history = useHistory();

    const handleOnChange = (e) => {
        if (e.target.name === 'title') {
            setContent({...content, title: e.target.value})
        } else if (e.target.name === 'img') {
            const file = e.target.files[0];
            getBase64(file).then(url => {
                setContent({...content, img: url})
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (content.title === '' || content.img === '') {
            alert('Missing something!')
        } else {
            let arr = login.user.posts;
            arr.push({
                id: uuidv1(),
                title: content.title,
                time: '',
                img: content.img,
                likeStatus: false,
                comments: []
            });
            setLogin({...login, [login.user.posts]: arr})
            history.push('/') // Return to the Posts page.
        }


    }

    const handleDelete = () => {
        setContent({...content, img: ''})
    }

    return (
        <>
            <Form onSubmit={handleSubmit} style={{height:'800px', width: '500px', margin: '5vh auto'}}>
                <Form.Group controlId='inputTitle'>
                    <Form.Label>Title of your post:</Form.Label>
                    <Form.Control
                        name='title'
                        type='text'
                        size='sm'
                        onChange={handleOnChange}
                    ></Form.Control>
                </Form.Group>
                {content.img === '' ? (
                    <Form.Group controlId='inputImage'>
                        <Form.File
                            name='img'
                            label='Upload the image here:'
                            onChange={handleOnChange}
                        ></Form.File>
                    </Form.Group>
                ) : (
                    <div className='imgContainer'>
                        <img
                            src={content.img}
                            style={{
                                width: '500px'
                            }}
                        ></img>
                        <div className='middle'>
                                <Button
                                    variant='warning'
                                    onClick={handleDelete}
                                >Delete</Button>
                        </div>
                    </div>
                )}
                <Button type='submit'>Submit</Button>
            </Form>
        </>
     );
}
 
export default Upload;
