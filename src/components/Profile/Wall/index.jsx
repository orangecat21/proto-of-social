import React from "react";
import s from "./Wall.module.css";

import NewPostFormContainer from "./NewPostForm/NewPostFormContainer";
import PostListContainer from "./PostList/PostListContainer";

const Wall = () => {

    return (
        <section className={s.wrapper}>
            <h3 className={s.title}>My posts</h3>
            <NewPostFormContainer />
            <PostListContainer />
        </section>
    );
}

export default Wall;
