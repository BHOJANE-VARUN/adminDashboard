import React, { useState } from "react";
import Header from "../components/Header";
import { Badge, Calendar } from "antd";
import { scheduleData } from "../data/dummy";
import dayjs from "dayjs";

const dateCellRender = (value) => {
  // value is a dayjs object
  const formatted = value.format("YYYY-MM-DD");
  const eventItems = scheduleData.filter(
    (event) => dayjs(event.StartTime).format("YYYY-MM-DD") === formatted
  );

  return (
    <ul>
      {eventItems.map((item) => (
        <li key={item.Id}>
          <Badge color={item.CategoryColor} text={item.Subject} />
        </li>
      ))}
    </ul>
  );
};
const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs("2021-01-10"));
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-[#33373E] rounded-3xl">
      <Header category={"App"} title={"Calendar"} />{" "}
      <Calendar value={selectedDate} cellRender={dateCellRender} />
    </div>
  );
};

export default CalendarPage;
