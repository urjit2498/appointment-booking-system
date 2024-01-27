import axios from "axios"

export const getTimeSlots = (startDate, endDate) => {
    const originalDate = new Date(endDate);
    const ApiEndDate = new Date(originalDate);
    ApiEndDate.setDate(originalDate.getDate() + 1);
    
    const slots = axios.get(`https://app.appointo.me/scripttag/mock_timeslots?start_date=${startDate}&end_date=${ApiEndDate}`)
    return slots;
}