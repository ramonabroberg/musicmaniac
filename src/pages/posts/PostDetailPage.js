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
import Comment from "../comments/Comment";

function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
          axiosReq.get(`/comments/?post=${id}`),
        ]);
        setPost({ results: [post] });
        setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  const postComments = comments.results.filter(comment => comment.post === +id);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" md={{ span: 10, offset: 1 }}>
        <Post {...post.results[0]} setPosts={setPost} postDetailPage />
        <Container className={`${appStyles.Content}`}>
          {currentUser ? (
            <CommentCreateForm
              profileImage={profile_image}
              profile_id={currentUser.profile_id}
              post={id}
              setPost={setPost}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
          {postComments.length ? (
            postComments.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))
          ) : currentUser ? (
            <span>
              "No one has commented on this post yet, go ahead and comment!
            </span>
          ) : (
            <span>No comments...</span>
          )}
        </Container>
      </Col>
    </Row>
  );
}

export default PostDetailPage;