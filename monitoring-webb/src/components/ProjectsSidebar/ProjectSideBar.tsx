import React from 'react'

const ProjectSideBar = () => {

    const AddRoom = () => {
        console.log('add rom')

    }

    return (
        <div>ProjectSideBar
            <button onClick={AddRoom} >Add Room</button>
        </div>
    )
}

export default ProjectSideBar