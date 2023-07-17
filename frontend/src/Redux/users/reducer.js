import { REQUEST, SUCCESS } from "../actionTypes";

const init = {
  isLoading: false,
  isError: false,
  user: [],
};
export const reduce = (state, { type, payload }) => {
  switch (type) {
    case REQUEST:
      return { ...state, isLoading: true };
    case SUCCESS:
      return { ...state, isLoading: false, users: payload };
    case REQUEST:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
