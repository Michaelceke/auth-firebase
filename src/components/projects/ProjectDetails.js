import React from 'react'

 function ProjectDetails(props) {

    console.log("props", props)
    const id=props?.match?.params?.id;
    return (
        <div className=" container section projectt-details">
           <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p> Lorem ipsum having a beautiful day is incomparable. families make our day very sweet and awesomem cant even start to talk about mums  love and daddys care and siblings sweet fight just when i think i am free</p>
                </div>

                <div className="card-action gret lighten-4 grey-text">

                </div>

                <div>Posyted by the net Ninja</div>
                <div>2nd September, 2am</div>

           </div>

        </div>
    )
}

export default ProjectDetails
