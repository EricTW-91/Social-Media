import React, { useContext } from 'react'
import { Context } from './Context'

import { IconContext } from "react-icons"
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const LikeButton = (props) => {
    const { login, setLogin } = useContext(Context)

    const handleToggle = () => {
        let arr = login.user.posts

        arr[props.imgIdx].likeStatus = !arr[props.imgIdx].likeStatus

        setLogin({...login, [login.user.posts]: arr})        
    }

    return !login.user.posts[props.imgIdx].likeStatus ?
    (
        <IconContext.Provider value={{ size: "1.2em", className: "mb-2" }}>
            <FaRegHeart onClick={handleToggle} />
        </IconContext.Provider>
    ) : (
        <IconContext.Provider value={{ size: "1.2em", color: "red", className: "mb-2" }}>
            <FaHeart onClick={handleToggle} />
        </IconContext.Provider>
    )
}

export default LikeButton