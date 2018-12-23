import { combineReducers } from 'redux';
import videoReducers from './videoReducers'
import popularReducers from './popularReducers'
import detailReducers from './detailReducers'
import relatedReducers from './relatedReducers'
import categoryReducers from './categoryReducers'
import seriesReducers from './seriesReducers'

const reducers = combineReducers({
    videoReducers,
    popularReducers,
    detailReducers,
    relatedReducers,
    categoryReducers,
    seriesReducers
})

export default reducers