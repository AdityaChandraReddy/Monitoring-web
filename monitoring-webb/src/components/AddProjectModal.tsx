import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import './AddProjectModal.css'
import { Dispatch, SetStateAction } from "react";
import Input from './Input';
import useInput from '../hooks/useInput';
import addProject from '../api/addProject'

// type Props = {
//     // setAddProjectModal: Dispatch<SetStateAction<boolean>>,
//     // setAddProjectModal: (value: boolean) => void,
//     value: boolean
// }
interface props {
    setAddProjectModal: Dispatch<SetStateAction<boolean>>,

    addProjectModal: boolean
}


function AddProjectModal({ setAddProjectModal, addProjectModal }: props) {


    const submitHandler = async () => {
        const addProjectservice = new addProject()
        const resp = await addProjectservice.addProjects(enteredName, enteredLocation)
        console.log('resss', resp)
    }

    const { value: enteredName, valueChangedHadler: nameChangeHandler } = useInput()

    // console.log('enteredName', enteredName)
    const { value: enteredLocation, valueChangedHadler: locationChangeHandler } = useInput()


    return ReactDOM.createPortal(
        <>
            <div className='modal-backdrop' onClick={() => { setAddProjectModal(false) }} >
            </div>
            <div className='modal-box'>
                <div className='container-addproject'>

                    <h2>Add Project</h2>
                    <div className='fields' >
                        {/* <input type='text' value={enteredName} onChange={nameChangeHandler} /> */}
                        <Input placeholder="Project Name" onChange={nameChangeHandler} type='text' value={enteredName} />
                        <Input placeholder="Location" onChange={locationChangeHandler} type='text' value={enteredLocation} />
                        <button onClick={submitHandler} >Buttin</button>
                    </div>
                </div>

            </div>
        </>, document.querySelector('.myModalDiv')!)
}

export default AddProjectModal