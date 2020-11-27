import React from "react";
import s from "../Wall.module.css";

import Post from "../Post";

const PostList = ({posts}) => {
    return (
        <ul className={s.posts}>
            {posts.map(item => <Post key={item.id} message={item.message}/>)}
        </ul>
    );
}

export default PostList;