// 
/**
 What is useReducer?

 useReducer is a react hook that allows you handle the complex state management in your component. in this hooks takes initialState and reducer function 
 as a argument and return a array one is the current value another is dispatch function.
 
 Let's introduce useReducer parameter and their work:

 useReducer define : 
 
 const [state, dispatch] = useReducer(reducer , initialState);


 1. State : state is show the current value which you have define on the initialState and show the initialState value on the initial render.

 2. dispatch : it is look like a useState update function where you update your initial state value. dispatch is always change the value and trigger
    a re-render.

3. reducer : reducer is a function that contain all logic and determine how the state will update. this function take state and action for update the 
    the the value.

4. initialState : It'a initial state value that you can set the and depends on this value reducer will be perform on that value.



Let's go with a real life example that i have create  my own code base : 

When you have the need use useReducer then you have to need define this useReducer top of the component.


Using this reducer i have try to create a todo app where you have add you todo and also delete your todo form todo list.

const [state, dispatch] = useReducer(reducer, initialState)




At fist you have see the reducer basically this is the function that contain all logic and return a value depends on the action you have click.

export const todoReducer = (state , action)=>{
    switch (action.type) {
        case "add_todo":
            return [...state ,{ id : Date.now() , text : action.payload , complete : false}]   
        case "delete_todo": 
            return state.filter((todo)=> todo.id !== action.payload)
        default:
            return state;
    }
}


In this reducer function take two argument one is the state and another is action.

Basically action is a object that has own type that define which which specific logic want to perform. use condition for the action type perform a 
a specific operation and return a new value. here you can see i have use switch statement for performing specific operation.


InitialState : 
export const todoInitialState = [];











 */