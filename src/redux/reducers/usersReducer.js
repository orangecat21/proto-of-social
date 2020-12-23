import actionTypes from "../actionTypes";

const initialState = {
    users: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USERS :
            return {
                ...state,
                users: [...state.users, ...action.users],
            }

        case actionTypes.SWITCH_FOLLOW :
            return {
                ...state,
                users: state.users.map(user => {
                    return {
                        ...user,
                        followed: user.id === action.currentId ? !user.followed : user.followed
                    };
                }),
            };

        case actionTypes.REMOVE_USERS :
            return {
                ...state,
                users: [],
            }

        default:
            return state;
    }
};

export default userReducer;

export const switchFollowAC = (currentId) => {
    return {
        type: actionTypes.SWITCH_FOLLOW,
        currentId,
    };
};

export const setUsersAC = (users) => {
    return {
        type: actionTypes.SET_USERS,
        users,
    };
};

export const removeUsersAC = () => {
    return {
        type: actionTypes.REMOVE_USERS,
    }
};