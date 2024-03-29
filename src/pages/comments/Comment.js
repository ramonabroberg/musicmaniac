import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import { MoreDropdownMenu } from "../../components/MoreDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Comment.module.css";
import CommentEditForm from "./CommentEditForm";

const Comment = (props) => {
  const {
    profile_image,
    profile_id,
    owner,
    content,
    created_at,
    setPost,
    setComments,
    id,
  } = props;

  const [showEdit, setShowEdit] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}`);
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <>
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
          {showEdit ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              profileImage={profile_image}
              content={content}
              setComments={setComments}
              setShowEdit={setShowEdit}
            />
          ) : (
            <p className={styles.Content}>{content}</p>
          )}
        </Media.Body>
        {is_owner && !showEdit && (
          <MoreDropdownMenu
            handleEdit={() => setShowEdit(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </>
  );
};

export default Comment;
