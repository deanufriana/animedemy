/* Ini merupakan action function dimana nantinya akan di panggil di tampilan dan menetapkan data dimana ia dibutuhkan */
import axios from 'axios'
//headers: {'Authorization': "bearer " + token}
import deviceStorage from '../data/deviceStorage'

var config = {
    headers: { 'Authorization': "Bearer " + deviceStorage.getKey() }
}

const ip = 'http://157.230.47.235:3333'

export function ALL_VIDEOS() {
    return {
        type: "ALL_VIDEOS",
        payload: axios.get(ip+'/api/v1/videos'
        ),
    }
}

export function GET_VIDEO(id) {
    return {
        type: "GET_VIDEO",
        payload: axios.get(ip+`/api/v1/video/${id}`    )
    }
}

export function SEARCH(text) {
    return {
        type: "ALL_VIDEOS",
        payload: axios.get(ip+`/api/v1/videos/search?search=${text}`    )
    }
}

export function POPULAR() {
    return {
        type: "POPULAR",
        payload: axios.get(ip+'/api/v1/videos/popular'    ),
    }
}

export function DETAIL_VIDEO(id) {
    return {
        type: "DETAIL_VIDEO",
        payload: axios.get(ip+`/api/v1/video/${id}`    )
    }
}