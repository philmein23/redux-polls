import { RECEIVE_USERS, UPDATE_USER_POLLS } from "../actions/users";
import { ADD_POLL } from "../actions/polls";
import { SAVE_POLL_ANSWER } from "../actions/polls";

export default function users(state = {}, action) {
  if (action.type === RECEIVE_USERS) {
    return { ...state, ...action.users };
  }

  if (action.type === ADD_POLL) {
    return {
      ...state,
      [action.poll.author]: {
        ...state[action.poll.author],
        polls: [...state[action.poll.author].polls, action.poll.id]
      }
    };
  }

  if (action.type === SAVE_POLL_ANSWER) {
    return {
      ...state,
      [action.authedUser]: {
        ...state[action.authedUser],
        answers: [...state[action.authedUser].answers, action.id]
      }
    };
  }

  return state;
}
