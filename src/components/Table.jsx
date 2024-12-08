// ScheduleTable.js
import React from "react";

const ScheduleTable = () => {
  const activeHours = {
    start: "09:30",
    end: "24:00",
  };

  const inactiveHours = {
    start: "12:00",
    end: "15:00",
  };

  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  return (
    <div className="p-4">
      <div className="border border-gray-300 rounded-sm shadow-md p-4">
        <table className="w-full text-left">
          {/* Active Hours */}
          <thead>
            <tr className="">
              <th className="py-2 text-xs text-gray-600 font-bold">ACTIVE HOURS</th>
              {days.map((day, index) => (
                <th key={index} className="py-2 text-xs text-gray-600 font-bold">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 text-gray-500 text-sm">Start Time</td>
              {days.map((_, index) => (
                <td key={index} className="py-2 text-xs text-gray-500">
                  {activeHours.start}
                </td>
              ))}
            </tr>
            <tr className="border-b-2 border-dashed  border-gray-300">
              <td className="py-2 text-gray-500 text-sm">End Time</td>
              {days.map((_, index) => (
                <td key={index} className="py-2 text-xs text-gray-500">
                  {activeHours.end}
                </td>
              ))}
            </tr>
          </tbody>

          {/* Inactive Hours */}
          <thead>
            <tr>
              <th className="py-2 text-xs text-gray-600 font-bold">INACTIVE HOURS</th>
              {days.map((day, index) => (
                <th key={index} className="py-2 text-xs text-gray-600 font-bold">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 text-gray-500 text-sm">Start Time</td>
              {days.map((_, index) => (
                <td key={index} className="py-2 text-gray-500 text-xs">
                  {inactiveHours.start}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-2 text-gray-500 text-sm">End Time</td>
              {days.map((_, index) => (
                <td key={index} className="py-2 text-gray-500 text-xs">
                  {inactiveHours.end}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleTable;
