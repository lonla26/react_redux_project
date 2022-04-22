import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/actions';

const EditTask = ({task}) => {
    const [action, setAction] = useState(task.description);
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const editedOne={
            id:task.id,
            description:action.trimStart(),
            isDone:task.isDone,
        };
        dispatch(editTask(editedOne));
        closeModal();
    };

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
    return (
        <div>
            <Button onClick={openModal}><i className={"fa-solid fa-pen-to-square"}></i></Button>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                    <form onSubmit={handleSubmit}>
                        <input type='text' value={action} onChange={e=>setAction(e.target.value)}/>
                        <Button type='submit'><i className="fa-solid fa-check"></i></Button>
                        <Button variant='danger' onClick={closeModal}><i className="fa-solid fa-xmark"></i></Button>
                    </form>        
            </Modal>
        </div>
    )
}

export default EditTask