import { combineReducers } from "redux";
import { userReducer } from "./User_reducer";
import { departmentsReducer } from "./Department_reducer";

export default combineReducers({
    userReducer,
    departmentsReducer
});
