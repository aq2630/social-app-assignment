import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../store/slices/user";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    image: "",
    dob: "",
    gender: "male",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      dispatch(setUserInfo(formState));
      navigate("/");
      return;
    }
    setValidated(true);
  };

  const handleChange = (event) => {
    setFormState({
      ...formState,
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
        <h3 className={styles.formTitle}>Please Create Account </h3>
        <Row className="mb-3">
          <Form.Group as={Col} md="12">
            <Form.Label>Profile Photo (Optional)</Form.Label>
            <Form.Control
              type="file"
              name="image"
              placeholder="Please uplaod photo"
              onChange={handleChange}
              className={styles.preventValidation}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Name*</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Name.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a Valid Email.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Gender*</Form.Label>
          <Form.Check
            label="Male"
            feedbackType="invalid"
            type="radio"
            value="male"
            checked={formState.gender === "male"}
            onChange={(e) =>
              setFormState({
                ...formState,
                gender: e.target.value,
              })
            }
          />
          <Form.Check
            label="Female"
            feedbackType="invalid"
            type="radio"
            value="female"
            checked={formState.gender === "female"}
            onChange={(e) =>
              setFormState({
                ...formState,
                gender: e.target.value,
              })
            }
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Date of Birth*</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              onChange={handleChange}
              placeholder="City"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Date.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default LoginForm;
