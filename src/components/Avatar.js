import React from "react";
import styles from "../styles/Avatar.module.css";

const Avatar = ({ src, height = 40, text }) => {
  return (
    <div>
      <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt="Avatar"
      />
      <span className={styles.Avatar_text}>{text}</span>
    </div>
  );
};

export default Avatar;
