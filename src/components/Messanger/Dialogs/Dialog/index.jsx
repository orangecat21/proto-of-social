import React from "react";
import s from "./Dialog.module.css";

const Dialog = (props) => {
    const {nickName} = props;

    return (
        <li className={s.wrapper}>
            <button className={s.button}>
                <img src="https://sovet-doctora73.ru/images/doctors/unnamed.jpg"
                     alt="User avatar"
                     className={s.userAvatar}
                />
                <span className={s.userNickname}>{nickName}</span>
            </button>
        </li>
    );
}

export default Dialog;