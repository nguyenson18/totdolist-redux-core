// const initialState = [
//     {id: 1, name: "learn Yoga", completed: false, priority:"Medium"},
//     {id: 2, name: "learn Redux", completed: true, priority:"High"},
//     {id: 3, name: "learn Javascrpit", completed: false, priority:"Low"},
// ]

// const todoListReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'todoList/addTodo':
//             return [...state, action.payload]
//         case 'todoList/toggleTodoStatus':
//             return state.map(todo=>                
//                     todo.id === action.payload 
//                 ? {...todo, completed: !todo.completed} 
//                 : todo              
//             )
//         default:
//             return state
//     }
// }

// export default todoListReducer


// redux toolkit
import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const todoSilice = createSlice({
    name:'todoList',
    initialState:{status: 'idle', todos: []},
    reducers:{
        addTodo: (state, action)=> {
            state.push(action.payload);
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id=== action.payload);
            currentTodo.completed = !currentTodo.completed
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.status = 'loading';
        }).addCase(fetchTodos.fulfilled, (state, action)=> {
            state.status = 'idle';
            state.action = action.payload
        }).addCase(addNewTodo.fulfilled, (state, action)=> {
            state.status = 'idle'
            state.todos.push(action.payload)
        }).addCase(updateTodo.fulfilled, (state, action)=> {
            state.status='idle'
            let currentTodo = state.todos.find(todo => todo.id=== action.payload);
            currentTodo = action.payload
        })
    }
})

export const fetchTodos = createAsyncThunk('/api/fetchtodos', async () => {
    const res = await fetch('/api/todos');
    const data = await res.json();
    console.log(data.todos)
    return data.todos
})

export const addNewTodo = createAsyncThunk('/api/addNewTodo', async (newTodo) => {
    const res = await fetch('/api/todos', {
        method:'POST',
        body: JSON.stringify(newTodo)
    })
    const data = await res.json();
    console.log("add",data.todos)
    return data.todos
})

export const updateTodo = createAsyncThunk('/api/updateTodo', async(updatedTodo) => {
    const res = await fetch('/api/updateTodo', {
        method: 'POST',
        body: JSON.stringify(updatedTodo)
    })
    const data = await res.json();
    console.log("update", data.todos)
    return data.todos
})

export default todoSilice
// export function addTodos (todo) {
//     return function addTodosThunk (dispatch, getState) {
//         console.log("[addtodosthunk]", getState())
//         console.log({todo})

//         dispatch(todoSilice.actions.addTodo(todo))
//         console.log('[addtodothunk sau]', getState())
//     }
// }