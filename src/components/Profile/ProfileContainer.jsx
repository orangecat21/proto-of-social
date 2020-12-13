import React from "react";
import Profile from "./index";
import {connect} from "react-redux";
import {removeUser, setUser} from "../../redux/reducers/profileReducer";

const ProfileContainer = (props) => {
    const {userId} = props.match.params;
    return <Profile userId={userId} {...props}/>;
};

const mapStateToProps = (state) => {
    return {
        user: state.profilePage.user,
    };
};

export default connect(mapStateToProps, {setUser, removeUser})(ProfileContainer);