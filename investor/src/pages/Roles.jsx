import React, { useState, useEffect } from "react";
import {
  NavbarInvestor,
  SidebarInvestor,
  DisplayCampaigns,
} from "../components";
import { useStateContext } from "../context";
import { b1, b2, arrow1, arrow2 } from "../assets/index";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Roles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getCampaigns } = useStateContext();
  const images = [b1, b2];

  const arrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    zIndex: 10,
  };

  const PrevArrow = (props) => (
    <div
      onClick={props.onClick}
      style={{ ...arrowStyles, left: 15, width: "40px" }}
    >
      <img src={arrow1} alt="prev-arrow" />
    </div>
  );

  const NextArrow = (props) => (
    <div
      onClick={props.onClick}
      style={{ ...arrowStyles, right: 15, width: "40px" }}
    >
      <img src={arrow2} alt="next-arrow" />
    </div>
  );

  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row bg">
      <div className="sm:flex hidden mr-10 relative">
        <SidebarInvestor />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5 bg">
        <NavbarInvestor />
        <div className="slide-container bg-slide">
          <Slide
            easing="ease"
            duration={3000}
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
          >
            {images.map((image, index) => (
              <div key={index} classNa0me="each-slide">
                <img
                  src={image}
                  alt="Slide"
                  style={{
                    width: "1300px",
                    height: "550px",
                    borderRadius: "20px",
                    border: "solid black 1px",
                  }}
                />
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Roles;
