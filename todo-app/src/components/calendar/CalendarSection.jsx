import React from "react";
import Calendar from "react-calendar";
import "../../styles/CalendarStyle.css";

function CalendarSection(props) {
  const { selectedDate, onChange } = props;

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={selectedDate}
        formatDay={(locale, date) => String(date.getDate())}
      />
    </div>
  );
}

export default CalendarSection;
