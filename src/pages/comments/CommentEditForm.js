import React, { useState } from "react";
import { axiosRes } from "../../api/axiosDefaults";
import Form from "react-bootstrap/Form";
import styles from "../../styles/CommentCreateEdit.module.css";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";

function CommentEditForm(props) {
  const { id, setShowEdit, setComments, content } = props;
  const [formContent, setFormContent] = useState(content);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}`, {
        content: formContent.trim(),
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                updated_at: "now",
              }
            : comment;
        }),
      }));

      setShowEdit(false);
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          as="textarea"
          className={styles.CommentForm}
          placeholder="comment here..."
          value={formContent}
          rows={3}
          onChange={handleChange}
        />
      </Form.Group>
      <div>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Light} mr-2 ml-auto d-block`}
          type="button"
          onClick={() => {
            setShowEdit(false);
          }}
        >
          Cancel
        </Button>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Red} mr-2 ml-auto d-block`}
          type="submit"
          disabled={!content.trim()}
        >
          Update
        </Button>
      </div>
    </Form>
  );
}

export default CommentEditForm;
