import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Navbar, Nav, NavItem } from "react-bootstrap";
import { NavLink, Redirect } from "react-router-dom";
import { LogOutUser } from "../../store/actions/UserAction";
import "./Styles.css";

const NavBar = () => {
  const users = useSelector((state) => state.data.users);
  const userId = useSelector((state) => state.user.userId);
  const userAuthenticated = useSelector((state) => state.user.AuthUser);
  const dispatch = useDispatch();

  const LogOutHandler = () => {
    dispatch(LogOutUser());
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
                  <NavLink
                    className="links"
                    activeStyle={{
                      backgroundColor: "#0070A5",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      borderRadius: "5px",
                      color: "#FFFFFF",
                    }}
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </NavItem>
                <NavItem className="pr-3">
                  <NavLink
                    className="links"
                    activeStyle={{
                      backgroundColor: "#0070A5",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      borderRadius: "5px",
                      color: "#FFFFFF",
                    }}
                    to="/leadboard"
                  >
                    LeaderBoard
                  </NavLink>
                </NavItem>
                <NavItem className="pr-3">
                  <NavLink
                    className="links"
                    activeStyle={{
                      backgroundColor: "#0070A5",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      borderRadius: "5px",
                      color: "#FFFFFF",
                    }}
                    to="/create"
                  >
                    Add Question
                  </NavLink>
                </NavItem>
                <NavItem className="pr-3">
                  <NavLink
                    className="links"
                    activeStyle={{
                      backgroundColor: "#0070A5",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      borderRadius: "5px",
                      color: "#FFFFFF",
                    }}
                    onClick={LogOutHandler}
                    to="/login"
                  >
                    Log Out
                  </NavLink>
                </NavItem>
              </Nav>

              <Navbar.Text className="justify-content-end">
                Signed in as :
                <img className="avatarLogo" alt='' src={users[userId].avatarURL} />
                {users[userId].name}
              </Navbar.Text>
            </Fragment>
        </Navbar.Collapse>
          ) : (
            <Redirect to="/login" />
          )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
