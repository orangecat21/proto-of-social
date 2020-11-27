import React from "react";
import s from './Profile.module.css';

import UserBoard from "../UserBoard";
import Wall from './Wall';

const Profile = () => {
    return (
        <main className={s.profile}>
            <img src="https://im0-tub-ru.yandex.net/i?id=f039078f7e669e6669e7085fc56494bc&n=13&exp=1"
                 alt="Background"
                 className={s.cover}
            />
            <UserBoard />
            <Wall />
        </main>
    );
}

export default Profile;