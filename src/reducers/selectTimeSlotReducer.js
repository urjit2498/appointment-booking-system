import { ActionType } from "../actionTypes/actionTypes";

const initialState = {
  slots: [],
};

export const slotReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_AVAILABLE_SLOTS:
      return { ...state, slots: payload };
    default:
      return state;
  }
};
