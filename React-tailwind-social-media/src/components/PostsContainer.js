import React, {useState, useRef, useCallback} from 'react'
import LoadMore from './LoadMore';
import Post from './Post'

const PostsContainer = () => {

    const[data, setData] = useState([]);
    const[pageNum, setPageNum] = useState(1);

    const {
        loading,
        error,
        posts,
    } = LoadMore(pageNum)

    const observer = useRef();
    const lastPostRef = useCallback(node =>{
        if(loading) return;
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPageNum(pageNum + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading])

    return (
        <div class="flex flex-col items-center transition duration-500 dark:bg-gray-900">
            <div class = "p-12"></div>
                {
                posts && (
                    posts.map((image, index) =>{
                        console.log(index)
                        if(image.length === index+1){
                            return <Post ref={lastPostRef} key={image.id} image={image}/>
                        }
                        else{
                            return <Post key={image.id} image={image}/>
                        }
                    })
                )}

            <button class = "p-4 dark:text-white">Load More</button>
        </div>
    )
}

export default PostsContainer
