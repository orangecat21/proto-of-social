import Users from "./index";
import {connect} from "react-redux";
import {removeUsersAC, setUsersAC, switchFollowAC} from "../../redux/reducers/usersReducer";

const mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.users,
    };
};

const mapDispatchToProps = {
    onSwitchFollow: switchFollowAC,
    setUsers: setUsersAC,
    removeUsers: removeUsersAC,
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;