import { combineReducers } from 'redux';
import videoReducers from './videoReducers'
import userReducers from './userReducers'
import popularReducers from './popularReducers'
import detailReducers from './detailReducers'

const reducers = combineReducers({
    videoReducers,
    userReducers,
    popularReducers,
    detailReducers
})

export default reducers