import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
        ]);
        setPost({ results: [post] });
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" md={{ span: 10, offset: 1 }}>
        <Post {...post.results[0]} setPosts={setPost} postDetailPage />
        <Container className={`${appStyles.Content}`}>
            {currentUser ? (
                <CommentCreateForm profileImage={profile_image} profile_id={currentUser.profile_id} post={id} setPost={setPost} setComments={setComments} />
            ) : comments.results.length ? (
                "Comments"
            ) : null}
        </Container>
      </Col>
    </Row>
  );
}

export default PostDetailPage;