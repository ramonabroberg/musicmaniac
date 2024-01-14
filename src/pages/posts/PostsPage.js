import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get("/posts/");
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchPosts();
  }, [filter, pathname]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" md={{ span: 10, offset: 1 }}>
        {hasLoaded ? (
          <>
            {posts.results.length
              ? posts.results.map((post) => (
                  <Post key={post.id} {...post} setPosts={setPosts} />
                ))
              : <Container className={appStyles.Content}>
                <i className="fa-solid fa-magnifying-glass" message={message}></i>
                </Container>}
          </>
        ) : (
            <Container className={appStyles.Content}>
            <Asset spinner />
            </Container>
        )}
      </Col>
    </Row>
  );
}

export default PostsPage;
