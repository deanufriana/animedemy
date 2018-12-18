/* Ini merupakan action function dimana nantinya akan di panggil di tampilan dan menetapkan data dimana ia dibutuhkan */
import categories from '../data/categories'
import axios from 'axios'

export function ALL_VIDEOS() {
    return {
        type: "ALL_VIDEOS",
        payload: axios.get('https://jsonplaceholder.typicode.com/posts')
    }
}

export function GET_VIDEO(id) {
    return {
        type: "GET_VIDEO",
        payload: axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    }
}