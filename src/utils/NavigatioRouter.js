import React from "react";
import Login from "../pages/Login/Index";
import NavBar from "../components/NavBar/Index";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Index";
import LeaderBoard from "../pages/LeaderBoard/Index";
import AddQuestion from "../pages/AddQuestion/Index";
import Answer from "../components/Answer/Index";
import Result from "../components/Result/Index";
import NotFound from "../pages/NotFound/Index";
import ProtectedRoute from "./ProtectedRoute";
const NavigatioRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path="/login" component={Login} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute exact path="/leadboard" component={LeaderBoard} />
        <ProtectedRoute exact path="/create" component={AddQuestion} />
        <ProtectedRoute exact path="/answer/:Qid" component={Answer} />
        <ProtectedRoute exact path="/results/:Qid" component={Result} />
        <ProtectedRoute component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default NavigatioRouter;
