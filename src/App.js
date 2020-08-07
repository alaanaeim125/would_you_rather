import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import NavigatioRouter from "./utils/NavigatioRouter";
import { getAllUsersAndQuestions } from "./store/actions/DataAction";

const App = () => {
  const dispatch = useDispatch();

  const getAllData = () => {
    dispatch(getAllUsersAndQuestions());
  };

  useEffect(() => {
    getAllData();
  });
  return <NavigatioRouter />;
};

export default App;
