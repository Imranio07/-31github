import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { counterReducer } from "./counterReducer";
import { todosReducer } from "./todosReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    todos: todosReducer,
    counter: counterReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));