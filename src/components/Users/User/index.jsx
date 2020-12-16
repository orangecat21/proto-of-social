import React, {useState} from "react";
import s from "./User.module.css";
import userPhoto from '../../../assets/img/user.jpg';
import {NavLink} from "react-router-dom";
import {ReactComponent as Loader} from "../../../assets/svg/loader.svg";
import axios from "axios";


const User = ({userData, onSwitchFollow}) => {
    const [isLoading, setIsLoading] = useState(false);

    const clickHandler = () => {
        setIsLoading(true);
        userData.followed
        ? axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userData.id}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "b04d72f2-efc4-408b-a798-0a956aab24e7",
            },})
                .then(res => {
                    res.data.resultCode === 0 && onSwitchFollow(userData.id);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setIsLoading(false);
                })
        : axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userData.id}`, {},{
            withCredentials: true,
            headers: {
                "API-KEY": "b04d72f2-efc4-408b-a798-0a956aab24e7",
            },})
                .then(res => {
                    res.data.resultCode === 0 && onSwitchFollow(userData.id);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setIsLoading(false);
                });
    }

    return (
        <li className={s.wrapper}>
            <NavLink to={`/profile/${userData.id}`} className={s.userAvatar}>
                <img src={userData.photos.small || userPhoto}
                     alt="User avatar"
                     className={s.userAvatar}
                />
            </NavLink>

            <button className={s.followButton}
                    onClick={clickHandler}
            >
                {
                    isLoading
                    ? <Loader style={{width: 40, height: 20}}/>
                    : userData.followed ? "Unfollow" : "Follow"
                }
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