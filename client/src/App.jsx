import React from "react";
import { Route, Routes } from "react-router-dom";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
import LogoutButton from "./components/LogoutButton";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create-campaign" element={<CreateCampaign />} />
      <Route path="/campaign-details/:id" element={<CampaignDetails />} />
      <Route path="/logout" element={<LogoutButton />} />
    </Routes>
  );
};

export default App;
