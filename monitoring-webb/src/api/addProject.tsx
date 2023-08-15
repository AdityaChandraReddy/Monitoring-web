import { response, room } from "../components/ProjectsSidebar/ProjectSideBar"

class Projects {
    async addProjects(ProjectName: string | number, location: string | number) {

        try {
            await fetch('http://localhost:8000/api/Addproject/', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    projectName: ProjectName,
                    dateCreated: `${new Date()}`,
                    company: "Firm",
                    location: location
                })
                // "projectName" : "New",
                // "dateCreated":"33",
                // "company":"google"

            }).then((res) => res)
        }
        catch (e) {
            console.log('Error Adding Project', e)
        }
    }


    async addRoom(roomName: string | number, projectName?: string, projectId?: string) {
        try {
            return await fetch(`http://localhost:8000/api/project/AddRoom/${projectId}`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    projectName: projectName,
                    roomName,
                    projectId
                })
                // "projectName" : "New",
                // "dateCreated":"33",
                // "company":"google"

            }).then((res) => res.json())
        }
        catch (e) {
            console.log('Error Adding Project', e)
        }
    }


    async getRooms(projectId: string | undefined) {

        try {
            return await fetch(`http://localhost:8000/api/getRooms/${projectId}`, {
                method: "GET",
            }).then(res => res.json()).then((res: response) => {
                return res
            })
        }
        catch (e: any) {

            console.log('Error getting  Rooms', e)

        }
    }

    async addImageForRoom(formData: FormData) {
        // console.log('e'/, e.target.files[0])
        // let gi = e.target.files[0]
        // const formData = new FormData()
        // formData.append('files', gi)
        try {
            await fetch('http://localhost:8000/api/addImageForRoom/', {
                method: "POST",
                headers: {
                    "Contetnt-Type": "multipart/form-data"
                },
                body: formData

            }).then((res) => {
                console.log('res', res.json())
            })
        }
        catch (e) {
            console.log('Error Uploaing Image', e)

        }
    }
    async getRoomImages(roomId: number | undefined) {
        try {
            return await fetch(`http://localhost:8000/api/getIMagesROom/${roomId}`, {
                method: "GET",
            }).then(res => res.json()).then((res: response) => {
                return res
            })
        }
        catch (e: any) {

            console.log('Error getting  Rooms Images', e)

        }
    }

}

export default Projects