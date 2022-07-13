const initialState = [
        {id: 1, name: "learn Yoga", completed: false, priority: 'Medium'},
        {id: 2, name: "learn Redux", completed: false, priority: 'High'},
        {id: 3, name: "learn Javascript", completed: false, priority: 'Low'},
    ]

const todoListReducer = (state = initialState, action)=> {
    switch (action.type) {
        case 'todoList/addTodo':
            return  [...state,  action.payload]              
        default:
            return state
    }
}

export default todoListReducer