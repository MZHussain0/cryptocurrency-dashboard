import React from "react";

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
    <div className="flex gap-1 pb-1">
      {chartDays.map((day) => (
        <button
          key={day.value}
          className={`px-4 py-2 bg-light-button dark:bg-dark-button hover:bg-light-button-hover dark:hover:bg-dark-button-hover font-semibold text-sm rounded-lg outline-none focus:outline-none ${
            selectedValue === day.value
              ? " text-white bg-light-button-selected dark:bg-dark-button-selected hover:bg-light-button-selected-hover dark:hover:bg-dark-button-selected-hover"
              : "bg-light-button dark:bg-dark-button"
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
