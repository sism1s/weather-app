import React from "react";
import "./Layout.scss";

function Layout(props) {
  return (
    <div className="layout">
      <div className="header">
        <p>Weather App</p>
      </div>
      {props.children}
    </div>
  );
}

export default Layout;
