import React, { useEffect, useState } from 'react'
import AddRoomModal from '../AddRoom/AddRoomModal'
import { useParams } from "react-router-dom";
import Projects from '../../api/addProject';
import ImageContainer from './ImageContainer';
import './ProjectSideBar.css'
export type room = {
    ProjectName: string
    image: string
    projectId: number
    roomId: number
    roomName: string
}
export type response = {
    status: string

    payload: room[]
}

const ProjectSideBar = () => {
    const [roomsOfProjects, setRoomsOfProject] = useState<response | undefined>()
    const { projectName, projectId } = useParams()
    const [selectedRoom, setSelectedRoom] = useState<number | undefined>(roomsOfProjects?.payload[0]?.roomId)
    const [selectedImage, setSelectedImages] = useState<any>();
    const getRoomsOfProject = async () => {
        const projectss = new Projects()
        const resp = await projectss.getRooms(projectId).then((res) => {
            return res
        })
        console.log('response ', resp)
        setRoomsOfProject(resp)
    }

    useEffect(() => {
        setSelectedRoom(roomsOfProjects?.payload[0]?.roomId)
        setSelectedImages((roomsOfProjects?.payload[0].image))
    }, [roomsOfProjects])

    useEffect(() => {
        // set
    }, [])

    useEffect(() => {
        getRoomsOfProject();
    }, [])



    // console.log('params', params)
    const [addRoomModal, setAddRoomModal] = useState(false)
    const AddRoom = async () => {
        console.log('add rom')

        setAddRoomModal(true)
    }

    return (
        <div className="monitoring-main-Container" style={{ height: "100vh" }} >
            <div className="monitoring-sidebar-container aside" style={{
                height: "100vh", maxWidth: "250px",
                flex: "1",
            }}>

                < button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded" onClick={AddRoom}   > Add Room</button >

                {roomsOfProjects && roomsOfProjects.payload.map((room: room) => {
                    return <li className='room-list-items' style={{ background: `${room.roomId === selectedRoom ? "rgb(238 238 238 / 31%)" : 'none'}`, cursor: "pointer" }} onClick={() => {
                        setSelectedRoom(room.roomId)
                        setSelectedImages(room.image)
                    }} key={room.roomId}>{room.roomName}</li>
                })}
                {
                    addRoomModal &&
                    <AddRoomModal projectId={projectId} projectName={projectName} setRoomsOfProject={setRoomsOfProject} setAddRoomModal={setAddRoomModal} addRoomModal={addRoomModal} />
                }
            </div>


            <ImageContainer selectedRoom={selectedRoom} selectedImage={selectedImage} />
        </div >
    )
}

export default ProjectSideBar