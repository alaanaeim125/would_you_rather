import { saveQuestion } from "../../utils/api";
import {
  ADD_QUESTION,
  USER_ANSWERED_QUESTION,
  SAVE_QUESTION_ANSWER,
} from "../../utils/constants";
import { addQuestionToUser } from "../actions/DataAction";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function userAnsweredQuestion(authedUser, qid, answer) {
  return { type: USER_ANSWERED_QUESTION, answer, qid, authedUser };
}

export const saveQuestionAnswer = (userId, questionId, answer) => ({
  type: SAVE_QUESTION_ANSWER,
  userId,
  questionId,
  answer,
});

export function AddQuestionhandler(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    return saveQuestion({ optionOneText, optionTwoText, author }).then(
      (question) => {
        console.log(question);
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      }
    );
  };
}
