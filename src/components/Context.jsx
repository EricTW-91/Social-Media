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

    const [users, setUsers] = useState([
        {
            id: 1,
            userName: '',
            password: '',
            posts: [
                {
                    id: '',
                    title: 'Hello',
                    time: '',
                    img: '',
                    likeStatus: false,
                    comments: [
                        {
                            id: '',
                            time: '',
                            comment: ''
                        },
                    ]
                }
            ]
        }
    ])

    const dispatch = (action) => {
        setUsers((posts) => reducer(action, posts))
    }

    return (
        <Context.Provider value={{
            users,
            dispatch
        }}>
            {props.children}
        </Context.Provider>
     );
}
 
export default Provider;