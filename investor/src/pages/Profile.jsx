import React, { useState, useEffect } from "react";

import {
  DisplayCampaigns,
  NavbarInvestor,
  SidebarInvestor,
} from "../components";
import { useStateContext } from "../context";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row bg">
      <div className="sm:flex hidden mr-10 relative">
        <SidebarInvestor />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5 bg">
        <NavbarInvestor />
        <DisplayCampaigns
          title="All Campaigns"
          isLoading={isLoading}
          campaigns={campaigns}
          style={{ color: "black" }}
        />
      </div>
    </div>
  );
};

export default Profile;
