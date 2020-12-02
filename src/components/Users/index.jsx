import React, {useEffect} from "react";
import s from "./Users.module.css";
import User from "./User";
import * as axios from "axios";


const Users = ({usersList, onSwitchFollow, setUsers}) => {

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=5')
                .then(res => setUsers(res.data.items));
    }, [setUsers]);

    return (
        <main className={s.wrapper}>
            <ul className={s.list}>
                {usersList.map(user => <User key={user.id} userData={user} onSwitchFollow={onSwitchFollow}/>)}
            </ul>
        </main>
    );
};

export default Users;