import Users from "./index";
import {connect} from "react-redux";
import {setUsersAC, switchFollowAC} from "../../redux/reducers/usersReducer";

const mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchFollow(currentId) {
            dispatch(switchFollowAC(currentId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;