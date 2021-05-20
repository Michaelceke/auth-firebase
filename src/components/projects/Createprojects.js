import React, {useState} from 'react'
import {createproject} from "../../redux/actions/projectActions";
import {connect} from "react-redux"
 

function CreateProject(props) {
   
    const {createProject}=props

    const [signInDetail, setSignInDetail]=useState(
        {
         title:"",
         content:""
        }
    )


    const handleChange=(e)=>{
       console.log(e)
    
       setSignInDetail({
           ...signInDetail,
           [e.target.id]:e.target.value,
       })

    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("create")
        createProject(signInDetail)
    }

        return (
            <div className="container">
                
                <form onSubmit={handleSubmit} className="white">
                      <h5 className="grey-text text-darken-3">Create new project</h5>

                      <div className="input-Field">
                          <label htmlFor="title">Title</label>
                          <input type="text" id="title" onChange={handleChange}/>
                      </div>

                      <div className="input-Field">
                          <label htmlFor="content" >Project Content</label>
                          <textarea id="content"  className="materialize-textarea" onChange={handleChange}></textarea>
                      </div>

                      <div className="input-Field">
                          <button className=" btn pink lighten-1 z-depth-0"> Create </button>
                      </div>
                </form>
            </div>
        )
    
}

/* const mapDispatchToProps=(dispatch)=>{
    return {
        createProject:(project)=>dispatch(createproject(project))
    }

}
 */

const mapDispatchToProps=(dispatch)=>({
 
        createProject:(project)=>dispatch(createproject(project))
 
})

export default connect(null, mapDispatchToProps)(CreateProject)