class Projects {
    async addProjects(ProjectName: string | number, location: string | number) {
        console.log()
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
}

export default Projects