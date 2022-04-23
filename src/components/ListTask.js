import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task';

const ListTask = () => {
    const { todos, displayTaskStyle } = useSelector(state => state)
    if (displayTaskStyle === "all") {
        return (
            <div style={{ marginTop: "20px" }}>
                {React.Children.toArray(todos.map(task => <Task task={task} key={task.id} />))}
            </div>
        )
    } else if(displayTaskStyle==="done"){
        return(
            <div style={{ marginTop: "20px" }}>
            {React.Children.toArray(todos.filter(el=>el.isDone===true).map(task => <Task task={task} key={task.id} />))}
        </div>
        )
    } else{
        return(
            <div style={{ marginTop: "20px" }}>
            {React.Children.toArray(todos.filter(el=>el.isDone===false).map(task => <Task task={task} key={task.id} />))}
        </div>
        )
    }

}

export default ListTask