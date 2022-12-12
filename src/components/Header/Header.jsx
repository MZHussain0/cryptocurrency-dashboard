import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="shadow-md">
      <img
        className="w-32 mx-4 py-1"
        src={logo}
        alt="Almabetter cryptocurrency dashboard"
      />
    </div>
  );
};

export default Header;
