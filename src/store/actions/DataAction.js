import { getInitialData } from "../../utils/api";
import {
  GET_QUESTIONS_USERS,
  ADD_QUESTION_TO_USER,
} from "../../utils/constants";

export const getAllUsersAndQuestions = () => {
  return (dispatch) => {
    getInitialData().then((result) => {
      dispatch({
        type: GET_QUESTIONS_USERS,
        payload: { users: result.users, questions: result.questions },
      });
    });
  };
};

export function addQuestionToUser({ id, author }) {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    author,
  };
}
