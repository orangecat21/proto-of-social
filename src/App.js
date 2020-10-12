import React from 'react';
import './App.css';

const Header = () => {
    return (
        <div>
            <a href="/#">Home</a>
            <a href="/#">Feed</a>
            <a href="/#">Messages</a>
        </div>
    );
}

const Technologies = () => {
    return (
        <ul>
            <li>HTML</li>
            <li>JSX</li>
            <li>JS</li>
        </ul>
    );
}

const App = () => {
    return (
        <div>
            <Header />
            <Technologies />
        </div>
    );
}

export default App;