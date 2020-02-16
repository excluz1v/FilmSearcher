import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { searchReducer } from './reducers/searchReducer'

const middleware = [thunk]

let reducers = combineReducers({
    movies: searchReducer
})
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))


export default store

window.store = store

