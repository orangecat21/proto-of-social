import actionTypes from "../actionTypes";

const initialState = {
    users: [
        {
            id: 1,
            followed: false,
            photo: "",
            userName: "Dmitry",
            status: "I`m boss",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 2,
            followed: true,
            photo: "",
            userName: "Kate",
            status: "I`m winner",
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: 3,
            followed: false,
            photo: "",
            userName: "Elena",
            status: "I`m healer",
            location: {city: "Kiev", country: "Ukraine"}
        },
    ],

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