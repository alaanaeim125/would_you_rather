import React, { useState } from "react";
import {
  Card,
  Button,
  Row,
  Form,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  saveQuestionAnswer,
  userAnsweredQuestion,
} from "../../store/actions/QuestionAction";

import { Redirect } from "react-router-dom";

const Answer = (props) => {
  const Questions = useSelector((state) => state.data.questions);
  const AuthUser = useSelector((state) => state.user.AuthUser);
  const userId = useSelector((state) => state.user.userId);
  const users = useSelector((state) => state.data.users);
  const Question = Questions[props.match.params.Qid];
  const [answer, setAnswer] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { history } = props;

    dispatch(saveQuestionAnswer(userId, props.match.params.Qid, answer));
    dispatch(userAnsweredQuestion(userId, props.match.params.Qid, answer));
    history.push(`/results/${props.match.params.Qid}`);
  };

  return AuthUser ? (
    <Row className="justify-content-center">
      <Card style={{ width: "23rem" }}>
        <Card.Img variant="top" src={users[Question.author].avatarURL} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Form onSubmit={handleSubmit}>
            <ListGroup className="pb-3">
              <ListGroupItem>
                <input
                  type="radio"
                  name="questionPoll"
                  id="optionOne"
                  className="mr-1"
                  value="optionOne"
                  onChange={handleInput}
                />
                <label htmlFor="optionOne">{Question.optionOne.text}</label>
              </ListGroupItem>
              <ListGroupItem>
                <input
                  type="radio"
                  name="questionPoll"
                  id="optionTwo"
                  className="mr-1"
                  value="optionTwo"
                  onChange={handleInput}
                />
                <label htmlFor="optionTwo">{Question.optionTwo.text}</label>
              </ListGroupItem>
            </ListGroup>
            <Button className="pr-3" type="submit" disabled={answer === ""}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Row>
  ) : (
    <Redirect to="/" />
  );
};

export default Answer;
