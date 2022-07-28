import { createStore } from "redux";
import rootReducer from "./Reducer/Index";

const store = createStore(rootReducer);

export default store;
