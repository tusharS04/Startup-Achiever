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
            right: "650px",
            border: "3px solid black",
            borderRadius: "10px",
            backgroundColor: " #ded776",
            padding: "13px",
          }}
          onClick={() => loginWithRedirect({})}
        >
          <h2 style={{ fontWeight: "bold", fontSize: "1.45rem" }}>LOGIN</h2>
        </button>
      </div>
    </div>
  );
}
export default LoginButton;
