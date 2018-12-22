/* Reducer berfungsi untuk memanggil function di action dengan dimana ini logika yang diterapkan */

const initialState = {
    results: [],
    data: {},
    isLoading: true,
    isError: false
}

function relatedReducers(state = initialState, action) {
    switch (action.type) {

        case "RELATED_PENDING":
            return { ...state, isLoading: true, results: action.payload }
        case "RELATED_FULFILLED":
            return { ...state, isLoading: false, results: action.payload.data }
        case "RELATED_REJECTED":
            return { ...state, isLoading: false, isError: true }

        default:
            return state
    }
}

export default relatedReducers