import React from "react";
import s from "./Wall.module.css";

import Post from "./Post";
import NewPostForm from "./NewPostForm";

const Wall = () => {
    return (
        <section className={s.wall}>
            <h3 className={s.wall__title}>My posts</h3>
            <NewPostForm/>
            <ul className={s.posts}>
                <Post message="Hello everybody"/>
                <Post message="Shut up, chicken"/>
                <Post message="My name is..."/>
            </ul>
        </section>
    );
}

export default Wall;
