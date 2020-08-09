import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Login from "../pages/Login/Index";
import NavBar from "../components/NavBar/Index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Index";
import LeaderBoard from "../pages/LeaderBoard/Index";
import AddQuestion from "../pages/AddQuestion/Index";
import Answer from "../components/Answer/Index";
import Result from "../components/Result/Index";
import NotFound from "../pages/NotFound/Index";
import ProtectedRoute from "./ProtectedRoute";

const NavigatioRouter = () => {
  const authUser = useSelector((state) => state.user.authUser);

  return (
    <Fragment>
      <Router>
        <NavBar />
        {checkLoginOrApp({ authUser: authUser })}
      </Router>
    </Fragment>
  );
};

const returnAllRouter = () => {
  return (
    <Fragment>
        <Switch>
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
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
    </Fragment>
  );
};

const checkLoginOrApp = (props) => {
  const { authUser } = props;
  if (authUser) {
    return returnAllRouter();
  } else {
    return (
        <Route render={() => <Login />} />
    );
  }
};

export default NavigatioRouter;

// import React, { Fragment } from "react";
// // import { useSelector } from "react-redux";
// import Login from "../pages/Login/Index";
// import NavBar from "../components/NavBar/Index";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Dashboard from "../pages/Dashboard/Index";
// import LeaderBoard from "../pages/LeaderBoard/Index";
// import AddQuestion from "../pages/AddQuestion/Index";
// import Answer from "../components/Answer/Index";
// import Result from "../components/Result/Index";
// import NotFound from "../pages/NotFound/Index";
// import ProtectedRoute from "./ProtectedRoute";
// const NavigatioRouter = () => {
//   // const authUser = useSelector((state) => state.user.authUser);

//   return (
//     <Fragment>
//       <BrowserRouter>
//         <NavBar />
//         <Switch>
//           <Route exact path="/" component={Login} />
//           <ProtectedRoute exact path="/dashboard" component={Dashboard} />
//           <ProtectedRoute exact path="/leadboard" component={LeaderBoard} />
//           <ProtectedRoute exact path="/add" component={AddQuestion} />
//           <ProtectedRoute
//             exact
//             path="/questions/:question_id"
//             component={Answer}
//           />
//           <ProtectedRoute
//             exact
//             path="/results/:question_id"
//             component={Result}
//           />
//           <ProtectedRoute component={NotFound} />
//         </Switch>
//       </BrowserRouter>
//     </Fragment>
//   );
// };

// export default NavigatioRouter;
