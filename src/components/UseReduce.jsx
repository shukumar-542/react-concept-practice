// const [state, dispatch] = useReducer(reducer, initialState);


export const reducer =(state, action)=>{
    switch (action.type) {
        case "increment":
            return { count  : state.count + 1}
        
        case "decrement" : 
            return { count  : state.count - 1}

        case "reset" : 
            return { count  : 0}
        default:
            return state;
    }
}


export const todoInitialState = [];
export const todoReducer = (state , action)=>{
    switch (action.type) {
        case "add_todo":
            return [...state ,{ id : Date.now() , text : action.payload , complete : false}]   
        case "delete_todo": 
            return state.filter((todo)=> todo.id !== action.payload)

        case "toggle_todo":
            return state.map(todo => todo?.id === action.payload  ? { ...todo , complete : !todo.complete } : todo)
        default:
            return state;
    }
}