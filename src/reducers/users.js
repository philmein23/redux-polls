import { RECEIVE_USERS, UPDATE_USER_POLLS } from "../actions/users";
import { ADD_POLL } from "../actions/polls";

export default function users(state = {}, action) {
  if (action.type === RECEIVE_USERS) {
    return { ...state, ...action.users };
  }

  if (action.type === UPDATE_USER_POLLS) {
    return {
      ...state,
      [action.authedUser]: {
        ...state[action.authedUser],
        polls: [...state[action.authedUser].polls, action.id]
      }
    };
  }

  if (action.type === ADD_POLL) {
    console.log("add poll", action.poll);
    // return {
    //   ...state,
    //   [action.authedUser]: {
    //     ...state[action.authedUser],
    //     polls: [...state[action.authedUser].polls, action.id]
    //   }
    // };
  }

  return state;
}
