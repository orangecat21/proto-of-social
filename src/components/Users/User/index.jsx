import React from "react";
import s from "./User.module.css";


const User = ({userData, onSwitchFollow}) => {

    const clickHandler = () => {
        onSwitchFollow(userData.id);
    }

    return (
        <li className={s.wrapper}>
            <img src={userData.photo || "https://sovet-doctora73.ru/images/doctors/unnamed.jpg"}
                 alt="User avatar"
                 className={s.userAvatar}
            />

            <button className={s.followButton}
                    onClick={clickHandler}

            >
                {userData.followed? "Unfollow": "Follow"}
            </button>

            <section className={s.info}>
                <span className={s.name}>
                    {userData.userName}
                </span>

                <span className={s.status}>
                    {userData.status}
                </span>

                <span className={s.location}>
                    {userData.location.city},<br/>{userData.location.country}
                </span>
            </section>
        </li>
    );
};

export default User;