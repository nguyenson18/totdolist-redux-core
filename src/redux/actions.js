

export const addTodo =(data) => {
    return{
        type:'todoList/addTodo',
        payload: data
    }
}

export const searchFilterTodo = (text)=> {
    return{
        type:"filters/searchFilterChange",
        payload: text
    }
}

export const toggleTodoStatus = (todoId) => {
    return{
        type: 'todoList/toggleTodoStatus',
        payload: todoId
    }
}

export const statusFilterChange =(status) => {
    return{
        type:'filter/statusFilterChange',
        payload: status
    }
}

export const priorityFilterChange = (priority) => {
    return {
        type: 'filters/prioritiesFilterChange',
        payload: priority
    }
}