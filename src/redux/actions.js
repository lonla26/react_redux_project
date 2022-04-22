import { ADD, COMPLETE, DELETE, DISPLAY, EDIT } from "./actionTypes"

export const deleteTask=(id)=>{
    return{
        type:DELETE,
        payload:id,
    }
}

export const completeTask=(id)=>{
    return{
        type:COMPLETE,
        payload:id,
    }
}

export const addNewTask=(newTask)=>{
    return{
        type:ADD,
        payload:newTask,
    }
}

export const editTask=(editedTask)=>{
    return{
        type:EDIT,
        payload:editedTask,
    }
}

export const displayTask=(taskDisplay)=>{
    return{
        type:DISPLAY,
        payload:taskDisplay,
    }
}


