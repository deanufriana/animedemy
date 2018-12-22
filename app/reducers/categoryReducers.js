const initialState = {
    isLoading: false,
    isError: false,
    resultsCategory: []
}


function categoryRedusers(state = initialState, action) {
    switch (action.type) {

        case "CATEGORY_ID_PENDING":
            return { ...state, isLoading: true, resultsCategory: action.payload }
        case "CATEGORY_ID_FULFILLED":
            return { ...state, isLoading: false, resultsCategory: action.payload.data }
        case "CATEGORY_ID_REJECTED":
            return { ...state, isLoading: false, isError: true }

        default:
            return state
    }
}

export default categoryRedusers