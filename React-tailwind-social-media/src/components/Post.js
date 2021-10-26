import React from 'react'
import LikeToggle from './LikeToggle'
//px-2 md:px-20 lg:px-80 

const Post = (props) => {
    //console.log(props.image);
    return (
        <div class="bg-white dark:bg-gray-700 dark:text-white mb-10 rounded-lg border-2 
        dark:border-gray-800 transition duration-500 w-11/12 md:w-2/3 lg:w-1/3">
            <div class = "p-4 flex items-center">
                <img src = {props.image.src.original} alt = "" class="w-10 h-10 rounded-full"/>
                <a class = "text-l font-semibold text-gray-700 dark:text-white ml-4" href={props.image.photographer_url} target="_blank">{props.image.photographer}</a>
            </div>
            <img src = {props.image.src.original} alt = "" class="w-max"/>
            <div class = "p-4 flex items-center">
                <LikeToggle/>
            </div>
        </div>
    )
}

export default Post
