import React from "react";

import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://cdn.pixabay.com/photo/2016/01/19/07/35/social-1148031_1280.png"
                 alt="logo"
                 className={s.logo}
            />
        </header>
    );
}

export default Header;