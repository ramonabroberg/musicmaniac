import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

const Asset = ({ spinner, src, message }) => {
  return (
    <div className={styles.Asset}>
      {spinner && <Spinner animation="border" />}
      {src ? (
        <img src={src} alt={message} />
      ) : (
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Asset;
