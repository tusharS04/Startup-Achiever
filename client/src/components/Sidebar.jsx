import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { logo, sun, logout1 } from "../assets";
import { navlinks } from "../constants";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      isActive && isActive === name && "bg-[#b0b0ae]"
    } flex justify-center items-center ${
      !disabled && "cursor-pointer"
    } ${styles}`}
    onClick={handleClick}
  >
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img
        src={imgUrl}
        alt="fund_logo"
        className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
      />
    )}
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const { logout } = useAuth0();

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[60vh]">
      <div style={{ width: "60px", height: "auto", pointerEvents: "none" }}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "100px", height: "auto", pointerEvents: "none" }}
        />
      </div>
      <div
        className="flex-1 flex flex-col justify-between items-center bg-[#ffff] rounded-[20px] w-[76px] py-4 mt-12 sidebar"
        style={{ marginTop: "50px" }}
      >
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>

        <Link onClick={() => logout()}>
          <Icon styles="w-[52px] h-[52px] " imgUrl={logout1} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
