import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Styles.css";
import { Form, Button, Col, Row } from "react-bootstrap";
import { AddQuestionhandler } from "../../store/actions/QuestionAction";

const AddQuestion = (props) => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "optionOne":
        setOptionOne(e.target.value);
        break;

      case "optionTwo":
        setOptionTwo(e.target.value);
        break;

      // no default
    }
  };
  const addNewQuestion = (e) => {
    console.log("from add question page ", optionOne, optionTwo, userId);
    const { history } = props;
    e.preventDefault();

    new Promise((res, rej) => {
      dispatch(AddQuestionhandler(optionOne, optionTwo, userId));

      setTimeout(() => res("success"), 500);
    }).then(() => {
      history.push("/dashboard");
    });
  };

  return (
    <div className="container text-center">
      <Row>
        <Col md={3} sm={12}></Col>
        <Col md={6} sm={12}>
          <p className="titleQuestion">Would You Rather:</p>
          <Form onSubmit={addNewQuestion}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Option One"
                name="optionOne"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Option Two"
                name="optionTwo"
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="btnSubmit"
              disabled={
                optionOne.trim().length <= 0 || optionTwo.trim().length <= 0
              }
            >
              <span>Submit</span>
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default AddQuestion;
