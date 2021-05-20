
const initialState={
    projects:[
        {id:"1",title:"help me find 1 peach", content:"blah blah blah"},
        {id:"2",title:"help me find 2 mangoes", content:"blah blah blah"},
        {id:"3",title:"help me find 3 bananas", content:"blah blah blah"},
        {id:"4",title:"help me find 4 oranges", content:"blah blah blah"}  
      ]
}
const projectReducer=(state=initialState, action)=>{
    switch(action.type){
          case "CREATE_PROJECT":
              console.log("created project on click::::", action.project)
              return state;
         case "CREATE_PROJECT_ERROR":
              console.log("create project error::", action.err)
              return state;
         default:
             return state
    }
    return state
}

export default projectReducer