import React, {useEffect, useState} from "react";
import s from "./Users.module.css";
import User from "./User";
import {ReactComponent as Loader} from "../../assets/svg/loader.svg";
import axios from "axios";


const Users = ({usersList, onSwitchFollow, setUsers, removeUsers}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [maxPage, setMaxPage] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=5')
            .then(res => {
                setUsers(res.data.items);
                let newMaxPage = Math.ceil(res.data.totalCount / 5);
                setMaxPage(newMaxPage);
            });
        return () => {
            removeUsers();
        };
    }, [setUsers, removeUsers]);

    const clickHandler = () => {
        let pageNumber = usersList.length / 5 + 1;
        if (pageNumber <= maxPage) {
            setIsLoading(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=5&page=${pageNumber}`)
                .then(res => {
                    setUsers(res.data.items);
                    setIsLoading(false);
                    pageNumber === maxPage && setIsDisabled(true);
                });
        }
    };

    if (usersList.length === 0) {
        return (
            <main className={s.wrapper}>
                <ul className={s.list}>
                    <Loader/>
                </ul>
            </main>
        );
    } else {
        return (
            <main className={s.wrapper}>
                <ul className={s.list}>
                    {usersList.map(user => <User key={user.id} userData={user} onSwitchFollow={onSwitchFollow}/>)}
                </ul>
                <button className={s.button} onClick={clickHandler} disabled={isDisabled}>
                    Load new users {isLoading && <Loader style={{width: 30, height: 30}}/>}
                </button>
            </main>
        );
    }
};

export default Users;