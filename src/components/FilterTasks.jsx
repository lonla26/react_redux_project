import React from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { displayTask } from '../redux/actions'


const FilterTasks = () => {
    const dispatch=useDispatch();

    return (
        <div style={{ width: "50%", margin: "20px auto"}}>
            <Form>
                <Form.Select aria-label="Default select example" onChange={e=>{dispatch(displayTask(e.target.value))}}>
                    <option value="all">Filter tasks...</option>
                    <option value="done">Done</option>
                    <option value="notDone">Not done</option>
                    <option value="all">All</option>
                </Form.Select>
            </Form>
        </div>
    )
}

export default FilterTasks