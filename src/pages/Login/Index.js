import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Form, Button } from "react-bootstrap";
import { LoginUser } from "../../store/actions/UserAction";

import "./Styles.css";

const Login = (props) => {
  console.log(props);

  const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.data.users);

  useEffect(() => {
    setUsers(userState);
  }, [userState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginUser(user));
    localStorage.setItem("auth", true);
  };

  return (
    <div>
      <Row>
        <Col xs={3}></Col>
        <Col xs={5}>
          <Form id="login" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label className="user">Login</Form.Label>
              <Form.Control
                as="select"
                name="select"
                placeholder="select user to login"
                value={user || "none"}
                onChange={(e) => setUser(e.target.value)}
              >
                <option disabled value="none">
                  select user to login
                </option>
                {Object.keys(users).map((oneUser) => {
                  return (
                    <option key={users[oneUser].id} value={users[oneUser].id}>
                      {users[oneUser].name}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
            <Button
              disabled={!user}
              variant="primary"
              type="submit"
              value="Submit"
            >
              Sign in
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
