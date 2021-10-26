import axios from 'axios';

export default axios.create({
    baseURL: `https://api.pexels.com`,
    headers: {
        Authorization: '563492ad6f917000010000011cee553735554c9dbeecc8a557a84517'
    }
});