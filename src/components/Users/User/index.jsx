import React from "react";
import s from "./User.module.css";
import userPhoto from '../../../assets/img/user.jpg';


const User = ({userData, onSwitchFollow}) => {

    const clickHandler = () => {
        onSwitchFollow(userData.id);
    }

    return (
        <li className={s.wrapper}>
            <img src={userData.photos.small || userPhoto}
                 alt="User avatar"
                 className={s.userAvatar}
            />

            <button className={s.followButton}
                    onClick={clickHandler}
            >
                {userData.followed ? "Unfollow" : "Follow"}
            </button>

            <section className={s.info}>
                <span className={s.name}>
                    {userData.name}
                </span>

                <span className={s.status}>
                    {userData.status || `I don't have any status`}
                </span>

                <span className={s.location}>
                    {userData.location?.city || `City`},<br/>{userData.location?.country || `Country`}
                </span>
            </section>
        </li>
    );
};

export default User;