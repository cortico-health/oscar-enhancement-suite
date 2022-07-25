import { ADD_MESSAGE, SELECT_DISCUSSION, GET_DISCUSSIONS } from "../actions";
import { discussionsData } from '../data';

export const discussionsReducer = (state, action) => {
  switch(action.type) {
    case GET_DISCUSSIONS: {
      return {
        ...state, 
        all: action.payload ? discussionsData.filter( discussion => discussion.patientId == action.payload) : discussionsData
      }
    };
    case SELECT_DISCUSSION: {
      return {
        ...state,
        selected: state.all.find( disc => disc.id == action.payload) ? action.payload : null
      }
    }
    case ADD_MESSAGE: {
      let index = state?.all.map(disc => disc.id).indexOf(parseInt(state?.selected));
      state.all[index].messages = [...state?.all[index].messages, action.payload]
      return state
    }
    default:
      return state;
  }
}