import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import './index.css';

import State from "./redux/state";

const rerenderAllTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

const state = new State();
rerenderAllTree(state);
state.subscribe(rerenderAllTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
