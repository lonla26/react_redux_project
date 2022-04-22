import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../redux/actions';

const AddTask = () => {
    const customStyles = {
        content: {
            top:'50%',
            left:'50%',
            right:'auto',
            bottom:'auto',
            marginRight:'-50%',
            transform:'translate(-50%, -50%)',
        },
    };
    Modal.setAppElement('#root');
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [description, setDescription] = useState("");
    const dispatch=useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newTask={
            id:Math.random(),
            description:description.trimStart(),
            isDone:false,
        };
        dispatch(addNewTask(newTask));
        closeModal();
        setDescription("");
    }

    return (
        <div>
            <Button onClick={openModal}><i className="fa-solid fa-circle-plus"></i></Button>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                    <form onSubmit={handleSubmit}>
                        <input type='text' value={description} onChange={e=>setDescription(e.target.value)} placeholder='Write a new task here...' required/>
                        <Button type='submit'><i className="fa-solid fa-plus"></i></Button>
                        <Button variant='danger' onClick={closeModal}><i className="fa-solid fa-xmark"></i></Button>
                    </form>
            </Modal>
        </div>
    )
}

export default AddTask