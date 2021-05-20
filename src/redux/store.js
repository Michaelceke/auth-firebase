import {createStore, applyMiddleware,compose} from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import {reduxFirestore,getFirestore} from "redux-firestore";

import {reactReduxFirebase,getFirebase} from "react-redux-firebase" 
import fbConfig from "../config/fbConfig"

 const middleWares=[thunk.withExtraArgument({getFirebase,getFirestore}), createLogger()]



 const composer= compose(applyMiddleware(...middleWares), window.__REDUX_DEVTOOLS_EXTENSION__(), reduxFirestore(fbConfig), reactReduxFirebase(fbConfig) )



let store = createStore(rootReducer,composer);

export default store