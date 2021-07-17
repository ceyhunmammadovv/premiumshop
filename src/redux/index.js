import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import cartReducer from "./cartReducer"

const reducers = combineReducers({
    cartReducer
})

const configureStore = () => {
    return createStore(reducers, applyMiddleware(thunk))
}

export default configureStore