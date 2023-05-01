import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../context";
import {
  CountBox,
  CustomButton,
  Loader,
  NavbarInvestor,
  SidebarInvestor,
} from "../components";
import { calculateBarPercentage, daysLeft } from "../utils";
import { thirdweb } from "../assets";

const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDonations, contract, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);

  const deadline = new Date(state.deadline);
  const today = new Date();
  const remainingTime = deadline.getTime() - today.getTime();
  const remainingDays = Math.ceil(remainingTime / (1000 * 60 * 60 * 24));
  let daysLeft;
  if (remainingDays < 0) {
    daysLeft = "Expired";
  } else if (remainingDays === 0) {
    daysLeft = "Today is the deadline";
  } else {
    daysLeft = `${remainingDays} days left`;
  }

  const fetchDonators = async () => {
    const data = await getDonations(state.pId);

    setDonators(data);
  };

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address]);

  const handleDonate = async () => {
    setIsLoading(true);

    await donate(state.pId, amount);

    navigate("/homeinvestor");
    setIsLoading(false);
  };

  return (
    <div>
      <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row bg">
        <div className="sm:flex hidden mr-10 relative">
          <SidebarInvestor />
        </div>
        <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5 bg">
          <NavbarInvestor />
          {isLoading && <Loader />}

          <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
            <div className="flex-1 flex-col">
              <img
                src={state.image}
                alt="campaign"
                className="w-full h-[410px] object-cover rounded-xl"
              />
              <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2">
                <div
                  className="absolute h-full bg-[#4acd8d]"
                  style={{
                    width: `${calculateBarPercentage(
                      state.target,
                      state.amountCollected
                    )}%`,
                    maxWidth: "100%",
                  }}
                ></div>
              </div>
            </div>

            <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px] ">
              <CountBox title="Days Left" value={daysLeft} />
              <CountBox
                title={`Raised of ${state.target}`}
                value={state.amountCollected}
              />
              <CountBox title="Total Backers" value={donators.length} />
            </div>
          </div>

          <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
            <div className="flex-[2] flex flex-col gap-[40px]">
              <div>
                <h4 className="font-epilogue font-semibold text-[18px] text-black uppercase">
                  Creator
                </h4>

                <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
                  <div>
                    <h4 className="font-epilogue font-semibold text-[14px] text-[#969799] break-all">
                      {state.owner}
                    </h4>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-epilogue font-semibold text-[18px] text-black uppercase">
                  Description
                </h4>

                <div className="mt-[20px]">
                  <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">
                    {state.description}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-epilogue font-semibold text-[18px] text-black uppercase">
                  Donators
                </h4>

                <div className="mt-[20px] flex flex-col gap-4 text-[#969799]">
                  {donators.length > 0 ? (
                    donators.map((item, index) => (
                      <div
                        key={`${item.donator}-${index}`}
                        className="flex justify-between items-center gap-4"
                      >
                        <p className="font-epilogue font-normal text-[16px] text-[#969799] leading-[26px] break-ll">
                          {index + 1}. {item.donator}
                        </p>
                        <p className="font-epilogue font-normal text-[16px] text-[#969799] leading-[26px] break-ll">
                          {item.donation}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">
                      No donators yet. Be the first one!
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h4 className="font-epilogue font-semibold text-[18px] text-black uppercase">
                Fund
              </h4>

              <div className="mt-[20px] flex flex-col p-4 bg-[#ffff] rounded-[10px] fund-border">
                <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#808191] ">
                  Fund the campaign
                </p>
                <div className="mt-[30px]">
                  <input
                    type="number"
                    placeholder=""
                    step="0.01"
                    className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-black text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />

                  <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
                    <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">
                      Back it because you believe in it.
                    </h4>
                    <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">
                      Support the project for no reward, just because it speaks
                      to you.
                    </p>
                  </div>

                  <div style={{ marginTop: "-200px" }}>
                    {remainingDays < 0 ? (
                      <CustomButton
                        btnType="button"
                        title="Deadline Gone"
                        styles="w-full bg-gray-400 cursor-default"
                        disabled
                      />
                    ) : (
                      <CustomButton
                        btnType="button"
                        title="Fund Campaign"
                        styles="w-full bg-[#8c6dfd]"
                        handleClick={handleDonate}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
