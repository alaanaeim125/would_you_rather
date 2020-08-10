import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Login from "../pages/Login/Index";
import NavBar from "../components/NavBar/Index";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Index";
import LeaderBoard from "../pages/LeaderBoard/Index";
import AddQuestion from "../pages/AddQuestion/Index";
import Answer from "../components/Answer/Index";
import Result from "../components/Result/Index";
import NotFound from "../pages/NotFound/Index";
import ProtectedRoute from "./ProtectedRoute";
import { Unauthorized } from "../pages/Unauthorized ";
const NavigatioRouter = () => {
  const auth = useSelector((state) => state.user);

  return (
    <Fragment>
      <NavBar />
      {checkLoginOrApp({ authUser: auth })}
    </Fragment>
  );
};

const returnAllRouter = () => {
  return (
    <Fragment>
      <Switch>
        <ProtectedRoute exact path="/" component={Dashboard} />
        <ProtectedRoute exact path="/leadboard" component={LeaderBoard} />
        <ProtectedRoute exact path="/add" component={AddQuestion} />
        <ProtectedRoute
          exact
          path="/questions/:question_id"
          component={Answer}
        />
        <ProtectedRoute exact path="/results/:question_id" component={Result} />
        <ProtectedRoute component={NotFound} />
      </Switch>
      <Route exact path="/unauthorized" component={Unauthorized} />
    </Fragment>
  );
};

const checkLoginOrApp = (props) => {
  const { authUser } = props;
  if (authUser.AuthUser) {
    return returnAllRouter();
  } else {
    return <Route render={() => <Login />} />;
  }
};

export default NavigatioRouter;
