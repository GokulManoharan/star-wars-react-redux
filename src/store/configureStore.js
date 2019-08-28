import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import loginReducer from '../reducers/LoginReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        loginData : loginReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore