import axios from 'axios';
const KEY = 'AIzaSyA31Kv2tWBod33m_PTFIQLN5tPvDRlSLvk';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: "snippet",
        masResults: 5,
        type:'video',
        key: `${KEY}`
    }
});