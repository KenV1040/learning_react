import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<App />, document.getElementById("root"));

//LifeCycle hooks
//There are 3 states when you launch a react app
//Mount - gets called at the start when you load a component
//Update - gets called when you update the state
//Unmount - When a component removes from the DOM (e.g when you delete a counter)

//In each of these states, they have functions where you can do stuff with
//Mount - (in this order) constructor, render, componentDidMount
//Update - render, componentDidUpdate
//Unmount - componentWillUnmount

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
