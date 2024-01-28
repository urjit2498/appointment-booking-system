import getTimeSlots from "../API/getTimeSlots";
import { ActionType } from "../actionTypes/actionTypes";

export const getSlots = (startDate, endDate) => async (dispatch) => {
  const response = await getTimeSlots.get(
    `/mock_timeslots?start_date=${startDate}&end_date=${endDate}`
  );
  console.log("response: ", response);
  dispatch({
    type: ActionType.FETCH_AVAILABLE_SLOTS,
    payload: response.data,
  });
};
