import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

const Result = (props) => {
  const AuthUser = useSelector((state) => state.user.AuthUser);
  const users = useSelector((state) => state.data.users);
  const questions = useSelector((state) => state.data.questions);
  const userId = useSelector((state) => state.user.userId);
  const question = questions[props.match.params.Qid];

  const optionOneVotesNumber = AuthUser ? question.optionOne.votes.length : 0;
  const optionTwoVotesNumber = AuthUser ? question.optionTwo.votes.length : 0;
  const totalVotes = AuthUser ? optionOneVotesNumber + optionTwoVotesNumber : 0;
  const optionOnePercentage = AuthUser
    ? parseInt((optionOneVotesNumber / totalVotes) * 100, 10)
    : 0;
  const optionTwoPercentage = AuthUser
    ? parseInt((optionTwoVotesNumber / totalVotes) * 100, 10)
    : 0;

  console.log(question);
  return AuthUser ? (
    <div>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Col xs="12" className="text-center">
            <b>Asked by : {users[question.author].name}</b>
            <br />
            <b>{users[userId].name}</b>{" "}
            {questions[question.id][users[userId].answers[question.id]].text}
          </Col>
          <ListGroup>
            <ListGroupItem>
              Option 1: {question.optionOne.text} ({optionOneVotesNumber} votes
              out of {totalVotes}) (Option 1 : {optionOnePercentage} % )
            </ListGroupItem>
            <ListGroupItem>
              Option 2: {question.optionTwo.text} ({optionTwoVotesNumber} votes
              out of{totalVotes}) (Option 2 : {optionTwoPercentage} %)
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default Result;
