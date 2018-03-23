import { getInitialData } from "../utils/api";
import { receivePolls } from "./polls";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";

export const GET_INITIAL_DATA = "GET_INITIAL_DATA";

const AUTH_ID = "tylermcginnis";

function getInitialData(users, polls) {
  return {
    type: GET_INITIAL_DATA,
    users,
    polls
  };
}

export function handleInitialData() {
  return async dispatch => {
    try {
      const { users, polls } = await getInitialData();

      dispatch(receivePolls(polls));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTH_ID));
    } catch (reason) {
      console.error(reason);
    }
  };
}
