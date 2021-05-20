import React, {useState} from 'react'

function SignIn() {
   
    const [signInDetail, setSignInDetail]=useState(
        {
         email:"",
         password:""
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
     console.log(signInDetail)
    }

        return (
            <div className="container">
                
                <form onSubmit={handleSubmit} className="white">
                      <h5 className="grey-text text-darken-3">Sign In</h5>

                      <div className="input-Field">
                          <label htmlFor="email">Email</label>
                          <input type="email" id="email" onChange={handleChange}/>
                      </div>

                      <div className="input-Field">
                          <label htmlFor="password" >Password</label>
                          <input type="password" id="password" onChange={handleChange}/>
                      </div>

                      <div className="input-Field">
                          <button className=" btn pink lighten-1 z-depth-0"> Login </button>
                      </div>
                </form>
            </div>
        )
    
}

export default SignIn
