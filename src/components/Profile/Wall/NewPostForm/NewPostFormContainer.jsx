import NewPostForm from "./index";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/reducers/profileReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        defaultPostText: state.profilePage.newPostText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPost() {
            dispatch(addPostActionCreator());
        },
        onPostChanged(text) {
            dispatch(updateNewPostTextActionCreator(text));
        }
    };
};

const NewPostFormContainer = connect(mapStateToProps, mapDispatchToProps)(NewPostForm);

export default NewPostFormContainer;