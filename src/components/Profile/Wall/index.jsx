import React from "react";
import s from "./Wall.module.css";

import Post from "./Post";
import NewPostForm from "./NewPostForm";

const Wall = (props) => {
    const {postData} = props;

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
