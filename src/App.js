import React from 'react';

import s from './App.module.css';

import Header from "./components/Header";
import Aside from "./components/Aside";
import Profile from "./components/Profile";

const App = () => {
    return (
        <div className={s.wrapper}>
            <Header />
            <Aside />
            <Profile />
        </div>
    );
}

export default App;