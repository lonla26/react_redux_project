import { ADD, COMPLETE, DELETE, DISPLAY, EDIT } from "./actionTypes";

const init = {
    todos: [
        {
            id:Math.random(),
            description:"Wake up",
            isDone:true,
        },
        {
            id:Math.random(),
            description:"Go out",
            isDone:false,
        },

    ],
    displayTaskStyle:"all",
    
};

export const taskReducer=(state=init,{type,payload})=>{
    switch (type) {
        case DELETE:
            return{
                ...state,todos:state.todos.filter(el=>el.id!==payload),
            };
        case COMPLETE:
            return{
                ...state,todos:state.todos.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el)
            };
        case ADD:
            return{
                ...state,todos:[...state.todos,payload]
            };
        case EDIT:
            return{
                ...state,todos:state.todos.map(el=>el.id===payload.id?payload:el)
            };
        case DISPLAY:
            return{
                ...state,displayTaskStyle:payload,
            }
    
        default:
            return state;
    }

}