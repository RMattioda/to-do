import { combineReducers } from 'redux'
import todoReducer from '../pages/todo/TodoReducer'

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer;