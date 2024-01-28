import { ActionType } from "../actionTypes/actionTypes";

const initialState = {
  slots: [],
};

export const slotReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_AVAILABLE_SLOTS:
      return { ...state, slots: payload };
    case ActionType.FAILURE_SLOTS:
      return { ...state, slots: [], message: 'An error occurred while fetching slots.' };
    default:
      return state;
  }
};
