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