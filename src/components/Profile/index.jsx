import React, {useEffect} from "react";
import axios from "axios";
import s from './Profile.module.css';

import UserBoard from "../UserBoard";
import Wall from './Wall';
import {ReactComponent as Loader} from "../../assets/svg/loader.svg";

const Profile = ({userId=13048, user, setUser, removeUser}) => {
    useEffect(() => {
        let didCancel = false;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((res) => {
                !didCancel && setUser(res.data);
            })
            .catch(err => console.log(err));
        return () => {
            didCancel = true;
            removeUser();
        }
    }, [userId, setUser, removeUser]);

    if (!user) {
        return (
            <main className={s.profile}>
                <Loader/>
            </main>
        );
    } else {
        return (
            <main className={s.profile}>
                <img src="https://im0-tub-ru.yandex.net/i?id=f039078f7e669e6669e7085fc56494bc&n=13&exp=1"
                     alt="Background"
                     className={s.cover}
                />
                <UserBoard user={user}/>
                <Wall/>
            </main>
        );
    }
}

export default Profile;