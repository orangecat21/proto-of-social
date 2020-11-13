import React from "react";
import s from "./Wall.module.css";

import Post from "./Post";
import NewPostForm from "./NewPostForm";

const Wall = () => {

    const postData = [
        {
            message: "Hello everybody",
            id: 1,
        },
        {
            message: "Shut up, chicken",
            id: 2,
        },
        {
            message: "My name is...",
            id:3,
        },
    ];

    return (
        <section className={s.wrapper}>
            <h3 className={s.title}>My posts</h3>
            <NewPostForm/>
            <ul className={s.posts}>
                {postData.map(item => <Post key={item.id} message={item.message}/>)}
            </ul>
        </section>
    );
}

export default Wall;
