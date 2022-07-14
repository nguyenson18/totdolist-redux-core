// const initialState = {
//     search: "",
//     status:"All",
//     priority:[],
// }

// const filterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'filters/searchFilterChange':
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         case 'filter/statusFilterChange':
//             return{
//                 ...state,
//                 status: action.payload
//             }
//         case 'fiters/priorityFilterChange':
//             return{
//                 ...state,
//                 priority: action.payload
//             }        
//         default:
//             return state
//     }
// }

// export default filterReducer


// redux toolkit
import { createSlice } from "@reduxjs/toolkit";

export default createSlice( {
    name: 'filters',
    initialState: {
        search: "",
        status:"All",
        priority:[],
    },
    reducers:{
        searchFilterChange: (state, action)=> {
            state.search = action.payload
        },
        statusFilterChange: (state, action) => {
            state.status = action.payload
        },
        priorityFilterChange: (state, action)=> {
            state.priority = action.payload
        },
    }
})