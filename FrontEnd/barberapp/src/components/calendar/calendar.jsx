import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarDate = () => {
  const [value, onChange] = useState(new Date());
  const KeyMap = "AIzaSyCOU-LoyvSAL4wcn7agegQANlVzH7ztmGI";

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        onClick={(value) => alert("New date is: ", value)}
      />
      {console.log(value)}
    </div>
  );
};

export default CalendarDate;
