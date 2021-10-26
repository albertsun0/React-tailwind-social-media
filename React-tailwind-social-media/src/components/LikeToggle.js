import React, {useState} from 'react'
import {ReactComponent as Liked} from '../assets/Liked.svg'
import {ReactComponent as Unliked} from '../assets/Unliked.svg'

const LikeToggle = () => {

    const [like, toggleLike] = useState(false);

    const likePost = () => {
        toggleLike(!like)
    }

    return (
        <div onClick = {likePost}>
            {like ? <Liked class = "float-right fill-current text-red-600" /> : <Unliked class = "float-right fill-current" /> }
        </div>
    )
}

export default LikeToggle
