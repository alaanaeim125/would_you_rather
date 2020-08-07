import React from "react";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Styles.css";

const SingleQuestion = (props) => {
  const questions = useSelector((state) => state.data.questions);
  const users = useSelector((state) => state.data.users);
  const { answered, Qid } = props;

  return (
    <div className="singleQuestion container">
      <Row>
        <Col md={2}>
          <div className="avatar text-center">
            <Image
              className="img"
              src={users[questions[Qid].author].avatarURL }
              roundedCircle
            />
          </div>
        </Col>

        <Col md={8}>
          <div className="details">
            <Link to={`/${answered}/${Qid}`}>
              <strong>{users[questions[Qid].author].name}</strong> <span>asks would you rather </span>
            </Link>
            <ListGroup className="group">
              <ListGroup.Item>{questions[Qid].optionOne.text}</ListGroup.Item>
              <ListGroup.Item>{questions[Qid].optionTwo.text}</ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SingleQuestion;
