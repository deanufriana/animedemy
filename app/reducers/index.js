/* Reducer berfungsi untuk memanggil function di action dengan dimana ini logika yang diterapkan */

const initialState = {
    counter: 0,
    movies: [],
    movie: {},
    isLoading: false,
    isError: false
}

function reducers(state = initialState, action) {
    switch (action.type) {
        case "INC":
            return { ...state, counter: state.counter + action.payload }
        case "ALL_MOVIES_PENDING":
            return { ...state, isLoading:true, movies: action.payload }
        case "ALL_MOVIES_FULFILLED":
            return { ...state, isLoading:false, movies: action.payload.data }
        case "ALL_MOVIES_REJECTED":
            return { ...state, isLoading: false, isError: true }
        case "GET_MOVIE":
            return { ...state, movie: action.payload }
        default:
            return state
    }
}

export default reducers