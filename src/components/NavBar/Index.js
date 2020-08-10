import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Navbar, Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { LogOutUser } from "../../store/actions/UserAction";
import { useHistory } from "react-router-dom";
import "./Styles.css";

const NavBar = () => {
  const history = useHistory();
  const users = useSelector((state) => state.data.users);
  const userId = useSelector((state) => state.user.userId);
  const userAuthenticated = useSelector((state) => state.user.AuthUser);

  const dispatch = useDispatch();

  const LogOutHandler = () => {
    dispatch(LogOutUser());
    localStorage.removeItem("auth", false);
    history.push("/");
  };

  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand>
          <div className="brandName">Would You Rather</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {userAuthenticated ? (
          <Navbar.Collapse id="basic-navbar-nav">
            <Fragment>
              <Nav className="mr-auto">
                <NavItem className="pr-3">
                  <NavLink className="links" to="/">
                    Dashboard
                  </NavLink>
                </NavItem>
                <NavItem className="pr-3">
                  <NavLink className="links" to="/leadboard">
                    LeaderBoard
                  </NavLink>
                </NavItem>
                <NavItem className="pr-3">
                  <NavLink className="links" to="/add">
                    Add Question
                  </NavLink>
                </NavItem>
                <NavItem className="pr-3">
                  <NavLink className="links" onClick={LogOutHandler} to="/">
                    Log Out
                  </NavLink>
                </NavItem>
              </Nav>

              <Navbar.Text className="justify-content-end">
                <strong style={{ marginRight: "10px" }}>
                  {users[userId].name}{" "}
                </strong>
                <img
                  className="avatarLogo"
                  alt=""
                  src={users[userId].avatarURL}
                />
              </Navbar.Text>
            </Fragment>
          </Navbar.Collapse>
        ) : (
          <div></div>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
