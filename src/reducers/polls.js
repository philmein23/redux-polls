import { RECEIVE_POLLS, ADD_POLL, SAVE_POLL_ANSWER } from "../actions/polls";

export default function polls(state = {}, action) {
  if (action.type === RECEIVE_POLLS) {
    return { ...state, ...action.polls };
  }

  if (action.type === ADD_POLL) {
    return { ...state, [action.poll.id]: { ...action.poll } };
  }

  if (action.type === SAVE_POLL_ANSWER) {
    return state.map(poll => {
      if (poll.id !== action.id) {
        return poll;
      }

      if (poll.id === action.id) {
        return {
          ...state,
          [action.id]: {
            [action.answer]: {
              ...poll[action.answer],
              votes: poll[action.answer].votes.concat(action.authedUser)
            }
          }
        };
      }
    });
  }

  return state;
}
