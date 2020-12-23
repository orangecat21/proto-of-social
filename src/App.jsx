import React from 'react';
import {Route, Redirect, Switch} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';
import store from "./redux/reduxStore";
import {Provider} from "react-redux";
import s from './App.module.css';

import Header from "./components/Header";
import Aside from "./components/Aside";
import Messanger from "./components/Messanger";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className={s.wrapper}>
                    <Header/>
                    <Aside/>
                    <Switch>
                        <Route path="/profile/:userId?" render={({match}) => <ProfileContainer match={match}/>}/>
                        <Route path="/messages" render={() => <Messanger/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path='*'>
                            <Redirect to='/profile'/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;