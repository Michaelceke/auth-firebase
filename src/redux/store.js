import {createStore, applyMiddleware,compose} from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import {getFirestore} from "redux-firestore";

import {getFirebase} from "react-redux-firebase" 


 const middleWares=[thunk.withExtraArgument({getFirebase,getFirestore}), createLogger()]



 const composer= compose(applyMiddleware(...middleWares), window.__REDUX_DEVTOOLS_EXTENSION__() )


let store = createStore(rootReducer,composer);

export default store