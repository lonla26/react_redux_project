import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask } from '../redux/actions'
import EditTask from './EditTask';

const Task = ({ task }) => {
    const dispatch = useDispatch();
    return (
        <div style={{ width: "50%", margin: "20px auto", boxShadow: '5px 10px whitesmoke' }}>
            <Card>
                <Card.Body>
                    <h4 id={task.isDone ? 'completed' : null}>{task.description}</h4>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <Button variant="danger" onClick={() => dispatch(deleteTask(task.id))}><i className={"fa-solid fa-trash"}></i> </Button>
                        <Button style={{marginLeft:'5px', marginRight:'5px'}} variant="success" onClick={() => dispatch(completeTask(task.id))}>{task.isDone ? <i className="fa-solid fa-arrow-rotate-left"></i> : <i className={"fa-solid fa-circle-check"}></i>} </Button>
                        <EditTask task={task} />
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Task