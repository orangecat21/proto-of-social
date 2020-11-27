import {connect} from "react-redux";

import PostList from "./index";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
    };
};


const PostListContainer = connect(mapStateToProps)(PostList);
export default PostListContainer;