import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  eligCheckReducer,
  eligCheckFailsReducer,
} from "../features/EligCheck/EligCheck";
import {
  setupPharmacyReducer,
  setupPharmacyFailuresReducer,
} from "../features/Pharmacy/SetupPreferredPharmacies";

import { automationReducer } from "../features/Automation/Automation";
import { authReducer } from "../features/Auth/auth";
import { messengerReducer } from "../features/Messenger";
import { providerMessagingReducer } from "../features/ProviderMessaging";
import { appReducer } from "../features/App";
import { sidebarReducer } from "../features/Sidebar";
import { dialogReducer } from "../features/Dialog/index";
import { notificationsReducer } from "../features/Notifications";
import { patientReducer } from "../features/Patient";

const rootReducer = combineReducers({
  eligCheck: eligCheckReducer,
  eligCheckFails: eligCheckFailsReducer,
  setupPharmacies: setupPharmacyReducer,
  setupPharmaciesFailures: setupPharmacyFailuresReducer,
  automation: automationReducer,
  auth: authReducer,
  messenger: messengerReducer,
  providerMessaging: providerMessagingReducer,
  app: appReducer,
  sidebar: sidebarReducer,
  dialog: dialogReducer,
  notifications: notificationsReducer,
  patient: patientReducer,
});

function logger({ getState }) {
  return (next) => (action) => {
    console.debug("will dispatch", action);
    const returnValue = next(action);
    console.debug("state after dispatch", getState());
    return returnValue;
  };
}

const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
