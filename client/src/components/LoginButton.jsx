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
            bottom: "430px",
            right: "1200px",
            border: "3px solid black",
            borderRadius: "10px",
            backgroundColor: " #f0e44a",
            margin: "25px",
            padding: "13px",
          }}
          onClick={() => loginWithRedirect({})}
        >
          <h2 style={{ fontWeight: "bold", fontSize: "1.7rem" }}>LOGIN</h2>
        </button>
      </div>
    </div>
  );
}
export default LoginButton;
