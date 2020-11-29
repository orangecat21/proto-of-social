import React from "react";
import s from "./Users.module.css";
import User from "./User";


const Users = ({usersList, onSwitchFollow, setUsers}) => {
    return (
        <main className={s.wrapper}>
            <ul className={s.list}>
                {usersList.map(user => <User key={user.id} userData={user} onSwitchFollow={onSwitchFollow}/>)}
            </ul>
        </main>
    );
};

export default Users;