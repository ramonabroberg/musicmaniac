import React from "react";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Post.module.css";
import appStyles from "../../App.module.css";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdownMenu } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    interested_id,
    interested_count,
    comments_count,
    image,
    title,
    instrument,
    genre,
    city,
    website,
    description,
    created_at,
    postDetailPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  }

  const handleDelete = async () => {
    try {
        await axiosRes.delete(`/posts/${id}/`)
        history.goBack();
    } catch (err) {
        console.log(err);
    }
  }

  const handleInterested = async () => {
    try {
      const { data } = await axiosRes.post("/interested/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                interested_count: post.interested_count + 1,
                interested_id: data.id,
              }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleNotInterested = async () => {
    try {
      await axiosRes.delete(`/interested/${interested_id}`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                interested_count: post.interested_count - 1,
                interested_id: null,
              }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={`${styles.Post} ${appStyles.Content} mb-4`}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={50} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{created_at}</span>
            {is_owner && postDetailPage && (
              <MoreDropdownMenu
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link className={styles.Post} to={`/posts/${id}`}>
        {image && <Card.Img src={image} alt={title} className="mb-5" />}
      </Link>
      <Link className={styles.Post} to={`/posts/${id}`}>
        {title && (
          <Card.Title className={`${styles.Title} text-center`}>
            {title}
          </Card.Title>
        )}
      </Link>
      <Card.Body>
        <div className={`${styles.postInfo} pb-4 pt-4`}>
          {instrument && (
            <Card.Text className="pl-3 pr-3">
              <strong>Instrument:</strong> {instrument}
            </Card.Text>
          )}
          {genre && (
            <Card.Text className="pl-3 pr-3">
              <strong>Genre:</strong> {genre}
            </Card.Text>
          )}
          {city && (
            <Card.Text className="pl-3 pr-3">
              <strong>City:</strong> {city}
            </Card.Text>
          )}
          {website && (
            <Card.Text className="pl-3 pr-3">
              <strong>Link to music:</strong> {website}
            </Card.Text>
          )}
        </div>

        {description && (
          <Card.Text className={`${styles.Description} text-center pb-4`}>
            {description}
          </Card.Text>
        )}
        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>You can't show interest on your own post</Tooltip>
              }
            >
              <i className="fa-regular fa-star" />
            </OverlayTrigger>
          ) : interested_id ? (
            <span onClick={handleNotInterested}>
              <i className={`fa-solid fa-star ${styles.Star}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleInterested}>
              <i className={`fa-regular fa-star ${styles.StarOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to show interest on this post!</Tooltip>}
            >
              <i className="fa-regular fa-star" />
            </OverlayTrigger>
          )}
          {interested_count}
          <Link to={`/posts/${id}`}>
            <i className="fa-regular fa-comments pl-3" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
