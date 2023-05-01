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
          <img
            src="https://i.ibb.co/HYqyDSV/project-manager.png"
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
