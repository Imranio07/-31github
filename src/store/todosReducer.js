import { API } from "../api"

const initialState = {
    items: [],
    countDone: 0
}


// {type: "ADD_TODO", payload: "Выучить реакт"}
// {type: "REMOVE_TODO", payload: "Выучить реакт"}
export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TODOS":
            return {
                ...state,
                items: action.payload
            }
        case "ADD_TODO":
            return {
                ...state,
                items: [action.payload, ...state.items],
            }
        case "REMOVE_TODO":

            return {
                ...state,
                items: state.items.filter(
                    item => item.id !== action.payload
                ),
            }
        default:
            return state
    }
}


// thunk для получения данных с сервера
// dispatch(fetchTodos())
export const fetchTodos = () => {
  return async (dispatch) => {
    const response = await API.get("/todos?limit=15");
    return dispatch({type: "SET_TODOS", payload: response.data.todos});
  }
}

// dispatch(asyncAddTodo("Выучить реакт"))
export const asyncAddTodo = (payload) => {
  return async (dispatch) => {
    const response = await API.post("/todos/add", {
      userId: 1,
      todo: payload,
      completed: false
    })
    return dispatch({type: "ADD_TODO", payload: response.data});
  }
}


// Thunk для удаления элемента
// dispatch(asyncRemoveTodo(2))
export const asyncRemoveTodo = (todoId) => {
  return async (dispatch) => {
    const response = await API.delete(`/todos/${todoId}`);
    return dispatch({type: "REMOVE_TODO", payload: response.data.id});
  }
}


export const addTodo = (payload) => {
    return { type: "ADD_TODO", payload };
}