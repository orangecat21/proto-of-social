import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import './index.css';

import Store from "./redux/state";

const rerenderAllTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

const store = new Store();
rerenderAllTree(store);
store.subscribe(rerenderAllTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
