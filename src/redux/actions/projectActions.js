/* export const createproject=(project)=>{
   
     return (dispatch, getState,{getFirebase,getFirestore})=>{

            // make async call to database
         const firestore=getFirestore();
         firestore.collection("projects").add({
             ...project,
             authorFirstName:"Goke",
             authorLastName:"Israel",
             authorId:12345,
             createdAt:new Date()

         }).then(()=>{
            dispatch({type:"CREATE_PROJECT",project})
         }).catch((err)=>{
            dispatch({type:"CREATE_PROJECT_ERROR",err})
         })

     }
}; */

export const createproject=(project)=>{
   
    return (dispatch)=>{
   

           dispatch({type:"CREATE_PROJECT",project})
        }
};