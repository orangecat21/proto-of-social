import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import s from './App.module.css';

import Header from "./components/Header";
import Aside from "./components/Aside";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";

const App = (props) => {
    const {state} = props;
    return (
        <Router>
            <div className={s.wrapper}>
                <Header/>
                <Aside/>
                <Switch>
                    <Route path="/profile" render={() => <Profile postData={state.postData}
                                                                  newPostText={state.newPostText}
                                                                  dispatch={state.dispatch}/>}/>

                    <Route path="/messages" component={Dialogs}/>
                    <Route path='*'>
                        <Redirect to='/profile'/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;