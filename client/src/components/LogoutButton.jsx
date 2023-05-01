import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button
      style={{
        border: "2px solid black",
        marginLeft: "700",
        backgroundColor: "rgb(119, 240, 194)",
      }}
      class="lb1"
      onClick={() => logout()}
    >
      Log Out
    </button>
  );
}

export default LogoutButton;
