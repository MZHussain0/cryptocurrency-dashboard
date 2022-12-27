import React from "react";
import { useState } from "react";

const ButtonGroup = ({
  chartDays,
  setDays,
  setSelectedValue,
  selectedValue,
}) => {
  const handleClick = (value) => {
    setSelectedValue(value);
    setDays(value);
  };

  return (
    <div className="flex gap-1">
      {chartDays.map((day) => (
        <button
          key={day.value}
          className={`px-4 py-2 bg-slate-300 font-semibold text-sm rounded-lg outline-none focus:outline-none ${
            selectedValue === day.value
              ? " text-white bg-blue-500"
              : "bg-slate-300"
          }`}
          onClick={() => handleClick(day.value)}
        >
          {day.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
