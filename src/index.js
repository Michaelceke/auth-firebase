import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {Provider} from "react-redux"
import store from "./redux/store"
import firebaseConfig from "./config/fbConfig"

import {ReactReduxFirebaseprovider} from "react-redux-firebase"
import {createFirestoreInstance} from "redux-firestore"

const rrfProps={
    firebaseConfig,
    config:{},
    dispatch:store.dispatch,
    createFirestoreInstance
};


ReactDOM.render(<Provider store={store}>
  <ReactReduxFirebaseprovider {...rrfProps}>
  <App/> 
  </ReactReduxFirebaseprovider>
</Provider>,document.getElementById("root"));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

