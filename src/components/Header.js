import React from "react";

const headerStyle = {
  display: "block",
  flex: "none",
  backgroundColor: "lightgreen",
  textAlign: "center",
};

function Header() {
  return (
    <div style={headerStyle}>
      <h1>Findacart</h1>

    </div>
  );
}

export default Header;