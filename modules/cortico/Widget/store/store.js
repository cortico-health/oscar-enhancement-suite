import { createStore, combineReducers } from "redux";
import {
  eligCheckReducer,
  eligCheckFailsReducer,
} from "../features/EligCheck/EligCheck";

const rootReducer = combineReducers({
  eligCheck: eligCheckReducer,
  eligCheckFails: eligCheckFailsReducer,
});

const store = createStore(rootReducer);
export default store;
