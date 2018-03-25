import { getInitialData } from "../utils/api";
import { receivePolls } from "./polls";
import { receiveUsers } from "./users";
import { authedUser } from "./authedUser";

const AUTH_ID = "tylermcginnis";


export function handleInitialData() {
  return async dispatch => {
    try {
      const { users, polls } = await getInitialData();

      dispatch(receivePolls(polls));
      dispatch(receiveUsers(users));
      dispatch(authedUser(AUTH_ID));
    } catch (reason) {
      console.error(reason);
    }
  };
}
