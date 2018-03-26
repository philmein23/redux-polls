import { RECEIVE_POLLS, ADD_POLL, SAVE_POLL_ANSWER } from "../actions/polls";

export default function polls(state = {}, action) {
  if (action.type === RECEIVE_POLLS) {
    return { ...state, ...action.polls };
  }

  if (action.type === ADD_POLL) {
    return { ...state, [action.poll.id]: { ...action.poll } };
  }

  if (action.type === SAVE_POLL_ANSWER) {
    const polls = Object.keys(state).map(id => state[id]);

    return polls.map(poll => {
      if (poll.id === action.id) {
        return {
          ...state,
          [action.id]: {
            [`${action.answer}Votes`]: [
              ...poll[`${action.answer}Votes`],
              ...action.authedUser
            ]
          }
        };
      }

      return poll;
    });
  }

  return state;
}
