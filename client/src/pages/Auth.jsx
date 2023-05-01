import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import Home from "./Home";

function Auth() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <Home />
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
            <ul>Can create Startup project</ul>
            <ul>Can see and Manage funds</ul>
          </p>
          <img
            src="/src/assets/project-manager.png"
            alt="Manager Roles"
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
