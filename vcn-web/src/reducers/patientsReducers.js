import { GET_PATIENTS, SELECT_PATIENT } from "../actions";
import { patientsData } from '../data';

export const patientsReducer = (state, action) => {
  switch(action.type) {
    case GET_PATIENTS: {
      return {
        ...state, all: patientsData
      }
    };
    case SELECT_PATIENT: {
      return {
        ...state, selected: state.all.find( patient => patient.id == action.payload) ? action.payload : null
      }
    };
    default:
      return state;
  }
}