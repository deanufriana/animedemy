import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import promiseMiddleware from 'redux-promise-middleware'

// store akan menyimpan data reducer
const configureStore = createStore(
    reducers,
    applyMiddleware(
        promiseMiddleware()
    )
)

export default configureStore