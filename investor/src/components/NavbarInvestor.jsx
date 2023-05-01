import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useStateContext } from "../context";
import { CustomButton } from "./";
import { logo } from "../assets";
import { navlinks } from "../constants";

const NavbarInvestor = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <h1>STARTUP ACHIEVER </h1>
      <div className="w-[200px] h-[70px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
        <CustomButton
          btnType="button"
          title={address ? "Connected" : "Connect"}
          styles={address ? "bg-gray-400" : "bg-[#8c6dfd] "}
          handleClick={() => {
            connect();
          }}
        />
      </div>
    </div>
  );
};

export default NavbarInvestor;
