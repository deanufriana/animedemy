const initialState = {
    data: {},
    isLoading: false,
    isError: false,
}


function userReducers(state = initialState, action) {
    switch (action.type) {

        // case "LOGIN_PENDING":
        //     return { ...state, isLoading: true, data: action.payload }
        // case "LOGIN_FULFILLED":
        //     return { ...state, isLoading: false, data: action.payload.data }
        // case "LOGIN_REJECTED":
        //     return { ...state, isLoading: false, isError: true }

        case "LOGIN":
            return { ...state, data: action.payload }

        default:
            return state
    }
}

export default userReducers