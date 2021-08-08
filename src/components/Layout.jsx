import React from 'react';
import styles from './Layout.module.scss';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <p>Weather App</p>
      </div>
      {children}
    </div>
  );
}

export default Layout;
