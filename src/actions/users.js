export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USER_POLLS = "UPDATE_USER_POLLS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}
