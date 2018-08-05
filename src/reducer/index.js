import { GET_DETAILS, CLEAR_DETAILS } from "../action/index";
import { combineReducers } from "redux";

function getDetailsReducer(state = {}, action) {
  switch (action.type) {
    case GET_DETAILS:
      return Object.assign({}, action.details);
    case CLEAR_DETAILS:
      return {};
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  details: getDetailsReducer
});
