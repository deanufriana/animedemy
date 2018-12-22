/* Reducer berfungsi untuk memanggil function di action dengan dimana ini logika yang diterapkan */

const initialState = {
    results: [],
    data: {},
    isLoading: true,
    isError: false
}

function seriesReducers(state = initialState, action) {
    switch (action.type) {

        case "SERIES_ID_PENDING":
            return { ...state, isLoading: true, results: action.payload }
        case "SERIES_ID_FULFILLED":
            return { ...state, isLoading: false, results: action.payload.data }
        case "SERIES_ID_REJECTED":
            return { ...state, isLoading: false, isError: true }

        default:
            return state
    }
}

export default seriesReducers