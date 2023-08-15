import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
// import './AddProjectModal.css'
import { Dispatch, SetStateAction } from "react";
import Input from '../Input';
import useInput from '../../hooks/useInput';
import Projects from '../../api/addProject'

import addProject from '../../api/addProject'
import { response } from '../ProjectsSidebar/ProjectSideBar';

// type Props = {
//     // setAddProjectModal: Dispatch<SetStateAction<boolean>>,
//     // setAddProjectModal: (value: boolean) => void,
//     value: boolean
// }
interface props {
    setAddRoomModal: Dispatch<SetStateAction<boolean>>,
    setRoomsOfProject: Dispatch<SetStateAction<response | undefined>>
    addRoomModal: boolean
    projectName?: string
    projectId?: string
}


function AddRoomModal({ setAddRoomModal, addRoomModal, projectName, projectId, setRoomsOfProject }: props) {


    const submitHandler = async (roomName: string | number) => {
        // const addProjectservice = new addProject()
        // const resp = await addProjectservice.addProjects(enteredName, enteredLocation)
        // console.log('resss', resp)
        const projectsApi = new Projects()
        const ressponse = await projectsApi.addRoom(roomName, projectName, projectId)
        if (ressponse.status) {
            setAddRoomModal(false)
            // setRoomsOfProject!((prev) => {
            //     let temp: response = JSON.parse(JSON.stringify(prev))
            //     temp.payload.push(ressponse.payload)
            //     return temp
            // })
        }
        console.log(ressponse)
    }

    const { value: enteredRoom, valueChangedHadler: roomNameChangeHandler } = useInput()

    // console.log('enteredName', enteredName)
    // const { value: enteredLocation, valueChangedHadler: locationChangeHandler } = useInput()


    return ReactDOM.createPortal(
        <>
            <div className='modal-backdrop' onClick={() => { setAddRoomModal(false) }} >
            </div>
            <div className='modal-box'>
                <div className='container-addproject'>

                    <h2>Add Project</h2>
                    <div className='fields' >
                        {/* <input type='text' value={enteredName} onChange={nameChangeHandler} /> */}
                        <Input placeholder="Room Name" onChange={roomNameChangeHandler} type='text' value={enteredRoom} />
                        {/* <Input placeholder="Location" onChange={locationChangeHandler} type='text' value={enteredLocation} /> */}
                        <button onClick={() => { submitHandler(enteredRoom) }} >Submit</button>
                    </div>
                </div>

            </div>
        </>, document.querySelector('.myModalDiv')!)
}

export default AddRoomModal