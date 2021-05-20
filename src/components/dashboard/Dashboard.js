import React from "react"
import Notifications from "./Notifications"
import ProjectList from "../projects/projectList"
import {connect} from "react-redux"


function DashBoard(props){
  
    const {projects}=props;
return(
    <div className="dashboard container">
      <div className="row">
          <div className="col s12 m6">
                <ProjectList projects={projects}/>
          </div>

          <div className="col s12 m5 offset-m1" >
                <Notifications/>
          </div>

      </div>
    </div>
)
}

const mapStateToProps=state=>({

        projects:state.project.projects
    }
)

export default connect(mapStateToProps)(DashBoard)