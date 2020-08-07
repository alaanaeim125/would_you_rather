import {
  GET_QUESTIONS_USERS,
  ADD_QUESTION_TO_USER,
  ADD_QUESTION,
  SAVE_QUESTION_ANSWER,
  USER_ANSWERED_QUESTION,
} from "../../utils/constants";

const initState = {
  users: [],
  questions: [],
};

const DataReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_QUESTIONS_USERS:
      return {
        ...state,
        users: action.payload.users,
        questions: action.payload.questions,
      };

    case ADD_QUESTION_TO_USER:
      const { id, author } = action;
      return {
        ...state,
        users: {
          ...state.users,
          [author]: {
            ...state.users[author],
            questions: state.users[author].questions.concat(id),
          },
        },
      };

    case USER_ANSWERED_QUESTION:
      const { authedUser, qid, answer } = action;

      return {
        ...state,
        users: {
          ...state.users,
          [authedUser]: {
            ...state.users[authedUser],
            answers: {
              ...state.users[authedUser].answers,
              [qid]: answer,
            },
          },
        },
      };

    case ADD_QUESTION:
      const { question } = action;
      return {
        ...state,
        questions: {
          ...state.questions,
          [question.id]: question,
        },
      };

    case SAVE_QUESTION_ANSWER: {
      const { userId, questionId, answer } = action;
      return {
        ...state,
        questions: {
          ...state.questions,
          [questionId]: {
            ...state.questions[questionId],
            [answer]: {
              ...state.questions[questionId][answer],
              votes: state.questions[questionId][answer].votes.concat(userId),
            },
          },
        },
      };
    }

    default:
      return state;
  }
};

export default DataReducer;
