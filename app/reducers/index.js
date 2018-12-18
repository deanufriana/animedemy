import { combineReducers } from 'redux';
import videoReducers from './videoReducers'
import userReducers from './userReducers'

const reducers = combineReducers({
    videoReducers,
    userReducers
})

export default reducers