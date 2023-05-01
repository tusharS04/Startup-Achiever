import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import HomeInvestor from "./HomeInvestor";

function Auth() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <HomeInvestor />
      ) : (
        <>
          {/* ye text nahi dikh raha  */}
          <h1>Roles </h1>
          <p
            style={{
              position: "absolute",
              top: "10%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <ul>Can see all startups</ul>
            <ul>Can invest in startups</ul>
            <ul>Can see plagairism score</ul>
          </p>
          <img
            src="/src/assets/investor.png"
            alt="Investor Roles"
            style={{
              width: "100vw",
              height: "100vh",
              position: "absolute",
              top: "0",
              left: "0",
              objectFit: "fit",
            }}
          />

          <LoginButton />
        </>
      )}
    </div>
  );
}

export default Auth;
