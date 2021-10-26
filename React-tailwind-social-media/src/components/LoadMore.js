import { useEffect, useState } from 'react'
import axios from 'axios'

export default function LoadMore(pageNum){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [posts, setPosts] = useState([])

    useEffect(() =>{
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: 'GET',
            baseURL: `https://api.pexels.com/v1/curated`,
            headers: {
                Authorization: '563492ad6f917000010000011cee553735554c9dbeecc8a557a84517'
            },
            params: {per_page: 15, page: pageNum },
            cancelToken: new axios.CancelToken(c => cancel = c)
          }).then(res =>{
            console.log("api call")
            const merge = [...posts, ...res.data.photos];
            setPosts(merge);
            setLoading(false)
          }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
          })
          return () => cancel()
    }, [pageNum])
    return {loading, error, posts}
}