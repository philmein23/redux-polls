import { savePoll, savePollAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
import { updateUserPolls } from "./users";

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

function updatePollAnswer({ authedUser, id, answer }) {
  return {
    type: SAVE_POLL_ANSWER,
    authedUser,
    id,
    answer
  };
}

export function handleAddPoll(poll) {
  return async (dispatch, getState) => {
    try {
      const { authedUser } = getState();

      dispatch(showLoading());
      const addedPoll = await savePoll({ ...poll, author: authedUser });

      dispatch(addPoll(addedPoll));

      dispatch(hideLoading());
    } catch (reason) {
      console.error(reason);
    }
  };
}

export function handleSavePollAnswer(poll) {
  console.log("poll2", poll);
  return async dispatch => {
    await savePollAnswer(poll);

    dispatch(updatePollAnswer(poll));
  };
}
