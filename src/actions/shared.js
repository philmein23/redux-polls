import { getInitialData } from "../utils/api";
import { receivePolls } from "./polls";
import { receiveUsers } from "./users";
import { authedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

const AUTH_ID = "tylermcginnis";

export function handleInitialData() {
  return async dispatch => {
    try {
      dispatch(showLoading());
      const { users, polls } = await getInitialData();
      dispatch(receivePolls(polls));
      dispatch(receiveUsers(users));
      dispatch(authedUser(AUTH_ID));
      dispatch(hideLoading());
    } catch (reason) {
      console.error(reason);
    }
  };
}
