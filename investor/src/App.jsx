import React from "react";
import { Route, Routes } from "react-router-dom";
import { CampaignDetails, HomeInvestor, Profile, Roles } from "./pages";
import LogoutButton from "./components/LogoutButton";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route exact path="/roles" element={<Roles />} />
      <Route exact path="/homeinvestor" element={<HomeInvestor />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/campaign-details/:id" element={<CampaignDetails />} />
      <Route path="/logout" element={<LogoutButton />} />
    </Routes>
  );
};

export default App;
