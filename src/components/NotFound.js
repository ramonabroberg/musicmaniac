import React from "react";
import Asset from "./Asset";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <Asset
        message={`Sorry, the page you're looking for doesn't exist`}
      />
    </div>
  );
};

export default NotFound;