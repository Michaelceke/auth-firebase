import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Navbar  from "./components/layout/Navbar"
import DashBoard from "./components/dashboard/Dashboard"
import ProjectDetails from "./components/projects/ProjectDetails"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import CreateProject from "./components/projects/Createprojects"



export default function App() {
  return(
    <BrowserRouter>
    <div className="App">
       <Navbar/>
       <Switch>
         <Route path="/"exact component={DashBoard}/>
         <Route path="/project/:id" component={ProjectDetails}/>
         <Route path="/signin" component={SignIn}/>
         <Route path="/signup" component={SignUp}/>
         <Route path="/create" component={CreateProject}/>
       </Switch>
    </div>
    </BrowserRouter>
    )
}


