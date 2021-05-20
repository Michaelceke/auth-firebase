import React from "react"
import ProjectSummary from "./ProjectSummary"

const ProjectList=(props)=>{
   const {projects}=props
    return(
        <div className="project-list section">

            
            {
               projects&& projects.map(project=>{
                  return  <ProjectSummary key={project.id} project={project}/>
               })
            }

        </div>
        )
}

export default ProjectList