import React from "react";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Post.module.css";
import appStyles from "../../App.module.css";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    interested_id,
    interested_count,
    image,
    title,
    instrument,
    genre,
    city,
    website,
    description,
    created_at,
    postDetailPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card className={`${styles.Post} ${appStyles.Content}`}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={60} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{created_at}</span>
            {is_owner && postDetailPage && "..."}
          </div>
        </Media>
      </Card.Body>
      <Link className={styles.Post} to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className={`${styles.Title} text-center pt-4`}>{title}</Card.Title>}

        <div className={`${styles.postInfo} pb-4 pt-4`}>
          {instrument && (
            <Card.Text className="pl-4 pr-4">
              <strong>Instrument:</strong> {instrument}
            </Card.Text>
          )}
          {genre && (
            <Card.Text className="pl-4 pr-4">
              <strong>Genre:</strong> {genre}
            </Card.Text>
          )}
          {city && (
            <Card.Text className="pl-4 pr-4">
              <strong>City:</strong> {city}
            </Card.Text>
          )}
          {website && (
            <Card.Text className="pl-4 pr-4">
              <strong>Link to music:</strong> {website}
            </Card.Text>
          )}
        </div>

        {description && (
          <Card.Text className={`${styles.Description} text-center pb-4`}>{description}</Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};

export default Post;
