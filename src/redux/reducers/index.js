import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import userReducer from "./usersReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: userReducer,
});

export default reducers;