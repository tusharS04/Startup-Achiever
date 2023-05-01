import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login">
      <div className="btn2">
        <button
          className="b2"
          style={{
            position: "absolute",
            bottom: "200px",
            right: "200px",
            border: "3px solid black",
            backgroundColor: "grey",
          }}
          onClick={() => loginWithRedirect({})}
        >
          Log In
        </button>
      </div>
    </div>
  );
}
export default LoginButton;
