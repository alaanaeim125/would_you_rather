import React, { useState, Fragment } from "react";
import { Nav, Row, TabContent, TabPane, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleQuestion from "../../components/SingleQuestion/Index";
import "./Styles.css";

const Dashboard = () => {

  const [tabsActive, setTabsActive] = useState(true);
  const users = useSelector((state) => state.data.users);
  const userId = useSelector((state) => state.user.userId);
  const AuthUser = useSelector((state) => state.user.AuthUser);
  const questions = useSelector(state => state.data.questions);
  const answerdQuestions = useSelector((state) => AuthUser ? Object.keys(users[userId].answers).sort((a, b) => state.data.questions[b].timestamp - state.data.questions[a].timestamp) : []);
  const unAnsweredQuestions = AuthUser ? Object.keys(questions).filter((Qid) => !answerdQuestions.includes(Qid)).sort((a, b) => questions[b].timestamp - questions[a].timestamp) : [];

  console.log('ddddddd    ', questions)
  
  return (
    <div className="container">
      <Row>
        <Col sm={3}></Col>
        <Col sm={6} className="align-content-center">
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link
                className="ansUnans"
                onClick={() => setTabsActive(true)}
              >
                Unanswered Questions
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="ansUnans"
                onClick={() => setTabsActive(false)}
              >
                answered Questions
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <br />
      <br />
      <TabContent>
        <TabPane active={tabsActive}>
          <Fragment>
            {
              unAnsweredQuestions.length > 0 ?
                unAnsweredQuestions.map(Qid => <SingleQuestion answered="questions" key={Qid} Qid={Qid} state="Active" />)
                : <h1 style={{textAlign: 'center'}}>Congratulation You Answer All Questions!!</h1>
            }
            
          </Fragment>
        </TabPane>
        <TabPane active={!tabsActive}>
          <Fragment>
            {
              answerdQuestions.map(Qid => <SingleQuestion answered="results" key={Qid} Qid={Qid} state="InActive" />)
            }
          </Fragment>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Dashboard;
