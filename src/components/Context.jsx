import React, { useState, useEffect, useReducer } from 'react';


export const Context = React.createContext();

const reducer = (action, posts) => {
    switch (action.type) {
        case 'Add_Post':
            return
        case 'Delete_Post':
            return
        case 'Like':
            return
        case 'Unlike':
            return
        case 'Add_Comment':
            return
        default:
            return posts;
    }
}

const Provider = (props) => {
    // const data = localStorage.getItem('posts');

    const [posts, setPosts] = useState([
        {
            id: 0,
            title: 'Hello',
            img: '',
            likes: 0,
            comments: {
                id: 0,
                name: '',
                comment: ''
            },

        }
    ])

    const dispatch = (action) => {
        setPosts((posts) => reducer(action, posts))
    }

    return (
        <Context.Provider value={{
            posts,
            dispatch
        }}>
            {props.children}
        </Context.Provider>
     );
}
 
export default Provider;