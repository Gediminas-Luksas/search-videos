import axios from "axios";

const KEY = 'AIzaSyD4LFR3SqVPJoq6d_NNAe3ajg6Eu-9bQIM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

