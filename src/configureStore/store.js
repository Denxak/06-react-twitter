import { legacy_createStore as createStore, combineReducers } from "redux";
import { userReducer } from "../reducer/userReducer";
import { statsReducer } from "../reducer/statsReducer";

const rootReducer = combineReducers({
    user: userReducer,
    stats: statsReducer
  });

export const store = createStore(rootReducer);