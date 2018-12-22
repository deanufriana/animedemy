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
        type: "SEARCH",
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

export function RELATED(id) {
    return {
        type: "RELATED",
        payload: axios.get(ip+ `/api/v1/video/${id}/related`)
    }
}

export function CATEGORY_ID(id) {
    return {
        type: "CATEGORY_ID",
        payload: axios.get(ip+ `/api/v1/videos/category/${id}`)
    }
}

export function SERIES_ID(id) {
    return {
        type: "SERIES_ID",
        payload: axios.get(ip+ `/api/v1/videos/series/${id}`)
    }
}