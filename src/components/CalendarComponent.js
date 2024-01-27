import React, { useEffect, useState } from "react";
import "../styles/Calendar.css";
import Calendar from "react-calendar";
import { formatedDate, formattedHour } from "../utils/helper";
import { getTimeSlots } from "../API/getTimeSlots";
import LoadingComponent from "./LoadingComponent";
import { ReactComponent as CheckCircle } from "../assets/circle-check.svg";
import ConfirmationModal from "./ConfirmationModal";
const CalendarComponent = () => {
  const currentDate = new Date();
  const [date, setDate] = useState([
    currentDate,
    new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 9
    ),
  ]);
  const [slots, setSlots] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(null);

  const getSlots = () => {
    const data = getTimeSlots(
      formatedDate(date[0]?.toDateString()),
      formatedDate(date[1]?.toDateString())
    );
    data.then((res) => {
      setSlots(res.data);
    });
  };

  useEffect(() => {
    getSlots();
  }, [date]);


  const handleSlotClick = (index) => {
    setSelectedSlotIndex(index);
  };
  
  const handleConfirm = () => {
    console.log('Confirmed');
    setModalOpen(false);
  };
  const handleCancel = () => {
    console.log('Cancelled');
    setSelectedSlotIndex(null);
    setModalOpen(false);
  };

  return (
    <div className="main_div">
      <div className="calendar_main_div">
        <div className="calendar">
          <div className="calendar_header">
            <h3>Event Calendar</h3>
            <span>Timezone: Asia/Calcutta</span>
          </div>
          <div className="calendar_body">
            <Calendar
              minDate={currentDate}
              onChange={setDate}
              value={date}
              selectRange={true}
            />
          </div>
        </div>
        <div className="slots">
          <h3>Available Slots</h3>
          {date.length > 0 ? (
            <p className="text-center">
              <span className="bold">Start:</span>{" "}
              {formatedDate(date[0].toDateString())}
              &nbsp;|&nbsp;
              <span className="bold">End:</span>{" "}
              {formatedDate(date[1].toDateString())}
            </p>
          ) : (
            <p className="text-center">
              <span className="bold">Default selected date:</span>{" "}
              {date.toDateString()}
            </p>
          )}

          <div className="available_slots">
            {slots?.length > 0 ? (
              slots
                .filter((slot) => {
                  return slot.date === formatedDate(date[0].toDateString());
                })
                .map((filteredSlot, index) =>
                  filteredSlot.slots?.map((s, index) => (
                    <div
                      className={`slot ${
                        selectedSlotIndex === index ? "selected" : ""
                      }`}
                      key={index}
                      onClick={() => handleSlotClick(index)}
                    >
                      <span>
                        {formattedHour(s.start_time)} -{" "}
                        {formattedHour(s.end_time)}
                      </span>
                      {selectedSlotIndex === index && (
                        <span className="icon">
                          <CheckCircle />
                        </span>
                      )}
                    </div>
                  ))
                )
            ) : (
              <LoadingComponent />
            )}
          </div>
        </div>
      </div>
      <div className="calendar_footer">
        <span>Developed by: Urjit</span>
        <button
          disabled={selectedSlotIndex === null}
          onClick={() => setModalOpen(true)}
        >
          Next <span>&#8594;</span>
        </button>
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        message="Are you sure you want to confirm the booking?"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default CalendarComponent;
