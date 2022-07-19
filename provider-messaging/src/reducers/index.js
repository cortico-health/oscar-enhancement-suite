// const discussionsSocket = new WebSocket(process.env.WEBSOCKET_URL);
import { patientsReducer } from "./patientsReducers";
import { discussionsReducer } from "./discussionsReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer";


const mainReducer = ({ patients, discussions, users, auth }, action) => {
  return {
    patients: patientsReducer(patients, action),
    discussions: discussionsReducer(discussions, action),
    users: usersReducer(users, action),
    auth: authReducer(auth, action)
  }
};

export default mainReducer;
