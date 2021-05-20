import React, {useState} from 'react'

function SignUp() {
   
    const [signInDetail, setSignInDetail]=useState(
        {
         email:"",
         password:"",
         firstName:"",
         lastName:""
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
                      <h5 className="grey-text text-darken-3">Sign Up</h5>

                      <div className="input-Field">
                          <label htmlFor="email">Email</label>
                          <input type="email" id="email" onChange={handleChange}/>
                      </div>

                      <div className="input-Field">
                          <label htmlFor="password" >Password</label>
                          <input type="password" id="password" onChange={handleChange}/>
                      </div>
                      
                      <div className="input-Field">
                          <label htmlFor="firstName">First Name</label>
                          <input type="text" id="firstName" onChange={handleChange}/>
                      </div>

                      <div className="input-Field">
                          <label htmlFor="lastName">Last Name</label>
                          <input type="text" id="lastName" onChange={handleChange}/>
                      </div>



                      <div className="input-Field">
                          <button className=" btn pink lighten-1 z-depth-0"> Sign Up </button>
                      </div>
                </form>
            </div>
        )
    
}

export default SignUp
