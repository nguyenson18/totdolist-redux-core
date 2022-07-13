const initialState = {
        search:"",
        status:"All",
        priority:[],
}

const filterReducer = (state= initialState, action)=> {
    switch (action.type) {
        case 'filters/searchFilterChange':
            return {
                ...state,
                search: action.payload
            };
        case 'filter/statusFilterChange':
            return{
                ...state,
                status: action.payload
            }
         case 'filters/prioritiesFilterChange':
            return{
                ...state,
                priority: action.payload
            }          
        default:
            return state
    }
}

export default filterReducer