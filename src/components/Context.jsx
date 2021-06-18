import React, { useState, useEffect } from 'react';


export const Context = React.createContext();

// const reducer = (action, posts) => {
//     switch (action.type) {
//         case 'Add_Post':
//             return
//         case 'Delete_Post':
//             return
//         case 'Like':
//             return
//         case 'Unlike':
//             return
//         case 'Add_Comment':
//             return
//         default:
//             return posts;
//     }
// }

const Provider = (props) => {
    const [login, setLogin] = useState({ status: false, user: {} })
    
    const [users, setUsers] = useState([
        {
            id: '1',
            userName: 'Eric',
            email: '123@123.123',
            password: '123',
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
        },
        {
            id: '2',
            userName: 'Carlos',
            email: '321@321.321',
            password: '321',
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

    // const dispatch = (action) => {
    //     setUsers((posts) => reducer(action, posts))
    // }

    useEffect(() => {
        // Initialize the users' data.
        const data = JSON.parse(localStorage.getItem('users'));

        data === null ? (
            localStorage.setItem('users', JSON.stringify(users))
        ) : (
            setUsers(data)
        )
    }, [])

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users])

    useEffect(() => {
        if (login.status && login.user !== {}) {
            let arr = users.filter((obj) => obj.id !== login.user.id);
            arr.push(login.user);
            setUsers(arr)
            console.log('Context login user update: ',arr)
        }
    }, [login])

    return (
        <Context.Provider value={{
            users,
            setUsers,
            // dispatch,
            login,
            setLogin
        }}>
            {props.children}
        </Context.Provider>
     );
}
 
export default Provider;