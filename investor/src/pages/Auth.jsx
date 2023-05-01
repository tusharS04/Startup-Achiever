import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import Roles from "./Roles";

function Auth() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <Roles />
      ) : (
        <>
          <img
            src="https://i.ibb.co/XJhDZ8j/investor.jpg"
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
