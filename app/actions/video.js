/* Ini merupakan action function dimana nantinya akan di panggil di tampilan dan menetapkan data dimana ia dibutuhkan */
import categories from '../data/categories'
import axios from 'axios'
//headers: {'Authorization': "bearer " + token}
var config = {
    headers: { 'Authorization': "Bearer " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU0NTIwNjM1MX0.fMrFon_pojgl9fNpYSmvTmMC9o51Kq7gwuVXH7Po5mo' }
}

export function ALL_VIDEOS() {
    return {
        type: "ALL_VIDEOS",
        payload: axios.get('http://192.168.1.116:3333/api/v1/videos',
            config
        )
    }
}

export function GET_VIDEO(id) {
    return {
        type: "GET_VIDEO",
        payload: axios.get(`http://192.168.1.116:3333/api/v1/video/${id}`,
            config
        )
    }
}

export function SEARCH(name) {
    return {
        type: "SEARCH",
        payload: axios.get(`http://192.168.1.116:3333/api/videos/search?search=${name}`,
            config
        )
    }
}