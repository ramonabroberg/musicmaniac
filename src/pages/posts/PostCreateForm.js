import React, { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";

import axios from "axios";

function PostCreateForm() {
  const [errors, setErrors] = useState({});

  const [instruments, setInstruments] = useState([
    { id: "select_instrument", name: "Select an instrument..." },
  ]);
  const [genres, setGenres] = useState([
    { id: "select_genre", name: "Select a genre..." },
  ]);
  const [postData, setPostData] = useState({
    title: "",
    image: "",
    instrument: "select_instrument",
    genre: "select_genre",
    city: "",
    website: "",
    description: "",
  });

  useEffect(() => {
    const fetchInstruments = async () => {
      try {
        const response = await axios.get("/posts/instruments/");
        setInstruments([...instruments, ...response.data]);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchGenres = async () => {
      try {
        const response = await axios.get("/posts/genres/");
        setGenres([...genres, ...response.data]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchInstruments();
    fetchGenres();
  }, [instruments, genres]);

  const textFields = (
    <div className="text-center">
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control className={styles.Input} type="text" name="title" />
      </Form.Group>

      <Form.Group controlId="post_image">
        <Form.Label>Image</Form.Label>
        <Form.Control className={styles.Input} type="file" name="post_image" />
      </Form.Group>

      <Form.Group controlId="instrument">
        <Form.Label>Instrument</Form.Label>
        <Form.Control
          className={styles.Input}
          as="select"
          name="instrument"
          value={postData.instrument}
          required
        >
          {instruments.map((instrument) => (
            <option key={instrument.id} value={instrument.id}>
              {instrument.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="genre">
        <Form.Label>Genre</Form.Label>
        <Form.Control
          className={styles.Input}
          as="select"
          name="genre"
          value={postData.genre}
          required
        >
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Button
        className={`${btnStyles.Button} ${btnStyles.Light}`}
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Red}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              <Form.Label
                className="d-flex justify-content-center"
                htmlFor="image-upload"
              >
                <Asset message="Click to upload an image" />
              </Form.Label>
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;
