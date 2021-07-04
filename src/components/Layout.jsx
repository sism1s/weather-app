import React from "react";
import styles from "./Layout.module.scss";

function Layout(props) {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <p>Weather App</p>
      </div>
      {props.children}
    </div>
  );
}

export default Layout;
