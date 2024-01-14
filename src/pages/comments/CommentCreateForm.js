import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Avatar from "../../components/Avatar";
import styles from "../../styles/CommentCreateEdit.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosRes } from "../../api/axiosDefaults";

function CommentCreateForm(props) {
  const { post, setPost, setComments, profile_id, profileImage } = props;
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        post,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));

      setContent("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Control
            as="textarea"
            className={styles.CommentForm}
            placeholder="comment here..."
            value={content}
            rows={3}
            onChange={handleChange}
          />
        </InputGroup>
      </Form.Group>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Red} ml-auto d-block`}
        type="submit"
        disabled={!content.trim()}
      >
        Add comment
      </Button>
    </Form>
  );
}

export default CommentCreateForm;
