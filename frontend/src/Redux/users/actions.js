import { FAILURE, REQUEST, SUCCESS } from "../actionTypes";

export const actionGetUsers = () => {
  return { type: REQUEST };
};
export const actionGetUsersSuccess = (payload) => {
  return { type: SUCCESS, payload };
};
export const actionGetUsersFailure = () => {
  return { type: FAILURE };
};

export const getUsers = () => (dispatch) => {
  dispatch(actionGetUsers());
  //   axios
  //     .get("http://localhost:4500/users")
  //     .then((res) => {
  //       //   console.log(res.data.users);
  //       dispatch(actionGetUsersSuccess(res.data.users));
  //     })
  //     .catch((err) => dispatch(actionGetUsersFailure()));
};
