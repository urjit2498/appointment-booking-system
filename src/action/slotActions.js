import getTimeSlots from "../API/getTimeSlots";
import { ActionType } from "../actionTypes/actionTypes";

export const getSlots = (startDate, endDate) => async (dispatch) => {
  try {
    if (!endDate || startDate === endDate) {
      const lastDayOfMonth = new Date(new Date(startDate).getFullYear(), new Date(startDate).getMonth() + 1, 0);
      endDate = lastDayOfMonth.toISOString().split('T')[0];
    }

    const response = await getTimeSlots.get(
      `/mock_timeslots?start_date=${startDate}&end_date=${endDate}`
    );
    dispatch({
      type: ActionType.FETCH_AVAILABLE_SLOTS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching slots:', error);

    dispatch({
      type: ActionType.FAILURE_SLOTS,
      payload: error.message,
    });
  }
};
