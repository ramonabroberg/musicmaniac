import React, { useState, useEffect, useRef } from "react";

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
import { Alert, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function PostCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const [instruments, setInstruments] = useState([]);
  const [genres, setGenres] = useState([]);

  const [postData, setPostData] = useState({
    image: "",
    title: "",
    instrument: "",
    genre: "",
    city: "",
    website: "",
    description: "",
  });

  const { image, title, instrument, genre, city, website, description } =
    postData;
  const imageInput = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const fetchInstruments = async () => {
      try {
        const response = await axios.get("/posts/create/instrument/");
        setInstruments(response.data.results);
      } catch (err) {
        // console.log(err);
      }
    };

    const fetchGenres = async () => {
      try {
        const response = await axios.get("/posts/create/genre/");
        setGenres(response.data.results);
      } catch (err) {
        // console.log(err);
      }
    };

    fetchInstruments();
    fetchGenres();
  }, []);

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.id]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    if (imageInput.current.files[0]) {
        formData.append('image', imageInput.current.files[0])
    }
    formData.append('title', title);
    formData.append('instrument', instrument);
    formData.append('genre', genre);
    formData.append('city', city);
    formData.append('website', website);
    formData.append('description', description);

    try {
        const {data} = await axiosReq.post('/posts/', formData);
        history.push(`/posts/${data.id}`)
    } catch (err) {
        if (err.response?.status !== 401) {
            setErrors(err.response?.data);
        }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          className={styles.Input}
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
            {message}
        </Alert>
      ))}

      <Form.Group controlId="instrument">
        <Form.Label>Instrument</Form.Label>
        <Form.Control
          className={styles.Input}
          as="select"
          name="instrument"
          value={instrument}
          onChange={handleChange}
          required
        >
          {instruments.map((instrument) => (
            <option key={instrument.id} value={instrument.id}>
              {instrument.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      {errors?.instrument?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
            {message}
        </Alert>
      ))}

      <Form.Group controlId="genre">
        <Form.Label>Genre</Form.Label>
        <Form.Control
          className={styles.Input}
          as="select"
          name="genre"
          value={genre}
          onChange={handleChange}
          required
        >
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      {errors?.genre?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
            {message}
        </Alert>
      ))}

      <Form.Group controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          className={styles.Input}
          type="text"
          name="city"
          value={city}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.city?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
            {message}
        </Alert>
      ))}

      <Form.Group controlId="website">
        <Form.Label>Link to music</Form.Label>
        <Form.Control
          className={styles.Input}
          type="text"
          name="website"
          value={website}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.website?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
            {message}
        </Alert>
      ))}

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          className={styles.Input}
          as="textarea"
          name="description"
          value={description}
          rows={4}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
            {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Light}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Red}`}
        type="submit"
      >
        Create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0" md={{ span: 10, offset: 1 }}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center mb-3`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure className="mt-3">
                    <Image className={appStyles.Image} src={image} />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Red}`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className={`d-flex justify-content-center ${styles.Upload}`}
                  htmlFor="image-upload"
                >
                  <i className={`fa-solid fa-arrow-up-from-bracket ${styles.UploadIcon}`}></i>
                  <Asset message="Click to upload an image" />
                </Form.Label>
              )}
            </Form.Group>
            <Form.Group className="d-none">
              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Container>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center mb-3`}
          >
            <div>{textFields}</div>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;
