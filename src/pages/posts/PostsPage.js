import React from 'react'
import { Col, Row } from 'react-bootstrap'

function PostsPage() {
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" md={{ span: 10, offset: 1 }}>
        <p>Posts here</p>
      </Col>
    </Row>
  );
}

export default PostsPage