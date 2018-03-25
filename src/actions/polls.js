import { savePoll, savePollAnswer } from "../utils/api";

export const ADD_POLL = "ADD_POLL";
export const SAVE_POLL_ANSWER = "SAVE_POLL_ANSWER";
export const RECEIVE_POLLS = "RECEIVE_POLLS";

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls
  };
}

function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll
  };
}

// function savePollAnswer({ authUser, id, answer }) {
//   return {
//     type: SAVE_POLL_ANSWER,
//     authUser,
//     id,
//     answer
//   };
// }

export function handleAddPoll(poll) {
  return async dispatch => {
    try {
      const { addedPoll } = await savePoll(poll);

      dispatch(addPoll(addedPoll));
    } catch (reason) {
      console.error(reason);
    }
  };
}

export function handleSavePollAnswer(poll) {
  return async dispatch => {
    await savePollAnswer(poll);
  };
}
