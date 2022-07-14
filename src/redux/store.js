// import { legacy_createStore as createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./reducer";

import { configureStore } from "@reduxjs/toolkit"
import filterSlice from "../components/Filters/filterSlice"
import todoSilice from "../components/TodoList/todoSilice"



// const store  = createStore(
//     rootReducer,
//     composeWithDevTools()
// )

// redux toolkit
const store = configureStore({
    reducer:{
        filters: filterSlice.reducer,
        todoList: todoSilice.reducer,
    }
})

export default store