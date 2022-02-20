import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewPost } from "../../store/slices/posts";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [postData, setPostDat] = useState({
    title: "",
    body: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      dispatch(addNewPost(postData));
      navigate("/");
      return;
    }
    setValidated(true);
  };

  const handleChange = (event) => {
    setPostDat({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Form
        className={styles.formRoot}
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <h3 className={styles.formTitle}>Create new Post</h3>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Post Title*</Form.Label>
            <Form.Control
              required
              type="text"
              name="title"
              placeholder="Enter Name"
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter post title.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Post Body*</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="body"
              placeholder="Enter Post Body"
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter post body.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Create Post</Button>
      </Form>
    </div>
  );
};

export default AddPostForm;
