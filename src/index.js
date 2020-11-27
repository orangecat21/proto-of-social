import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {Provider} from "react-redux";
import './index.css';
import store from "./redux/reduxStore";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
