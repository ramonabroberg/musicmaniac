import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";


const Comment = (props) => {
  const { profile_image, profile_id, owner, content, created_at } = props;
  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body>
          <Link to={`/profiles/${profile_id}`}>
            <span className={styles.Owner}>{owner}</span>
          </Link>
          <span className={styles.Date}>{created_at}</span>
          <p className={styles.Content}>{content}</p>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Comment;
