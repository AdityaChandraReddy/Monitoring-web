import React from "react";
import { useState, useEffect } from "react";
import "./ProjectPage.css";
import { useNavigate } from "react-router-dom";
import AddProjectModal from "../components/AddProjectModal";

function ProjectsPage() {
  const history = useNavigate();
  const [projects, setProjects] = useState([]);

  const [addProjectModal, setAddProjectModal] = useState(false);

  const addProjectandler = () => {
    setAddProjectModal(true);
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  const fetchProjects = async () => {
    let data = await fetch(`${process.env.REACT_APP_URL}projects/a/`).then(
      (res) => res.json()
    );
    setProjects(data.payload);
    console.log("data", data);
  };

  return (
    <div className="projects-container">
      <button className="add-project-btn" onClick={addProjectandler}>
        Add Project
      </button>
      {/* {console.log(projects)} */}
      <div className="projects-list">
        {projects.length > 0 &&
          projects.map((item, index) => (
            <div
              className="project-item"
              style={{
                border: "1px solid",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              <li
                onClick={() => {
                  history(
                    "/projects" + "/" + `${item.id}/${item.ProjectName} `,
                    {
                      state: {
                        ProjectName: item.ProjectName,
                      },
                    }
                  );
                }}
                style={{ textDecoration: "none", listStyle: "none" }}
              >
                {item.ProjectName}
              </li>
            </div>
          ))}
      </div>
      {addProjectModal && (
        <AddProjectModal
          setAddProjectModal={setAddProjectModal}
          addProjectModal={addProjectModal}
        />
      )}
    </div>
  );
}

export default ProjectsPage;
