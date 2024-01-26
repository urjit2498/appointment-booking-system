import React from "react";
import '../styles/Calendar.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  return (
    <div className="calendar_main_div">
      <div className="calendar">
        <div className="calendar_header">
          <h3>Select Dates</h3>
          <span>Timezone: Asia/Calcutta</span>
        </div>
        <div className="calendar_body">
          <Calendar />
        </div>
      </div>
      <div className="slots">
        <p>slots</p>
      </div>
    </div>
  );
};

export default CalendarComponent;
