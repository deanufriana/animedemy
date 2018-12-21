/* Reducer berfungsi untuk memanggil function di action dengan dimana ini logika yang diterapkan */

const initialState = {
    results: [],
    data: {},
    isLoading: true,
    isError: false
}

function detailReducers(state = initialState, action) {
    switch (action.type) {

        case "DETAIL_VIDEO_PENDING":
            return { ...state, isLoading: true, data: action.payload }
        case "DETAIL_VIDEO_FULFILLED":
            return { ...state, isLoading: false, data: action.payload.data }
        case "DETAIL_VIDEO_REJECTED":
            return { ...state, isLoading: false, isError: true }

        default:
            return state
    }
}

export default detailReducers