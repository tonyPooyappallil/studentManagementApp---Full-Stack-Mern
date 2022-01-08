import {
  GET_STUDENTS_ERROR,
  GET_STUDENTS_LOADING,
  GET_STUDENTS_SUCCESS,
} from "./actionTypes";

const initState = {
  studentData: {
    loading: false,
    data: [],
    error: false,
  },
};

export const studentReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_STUDENTS_LOADING:
      return {
        ...state,
        studentData: { ...state.studentData, loading: true },
      };
    case GET_STUDENTS_SUCCESS:
      console.log(payload, "...............................................");
      return {
        ...state,
        studentData: {
          loading: false,
          data: payload,
        },
      };
    case GET_STUDENTS_ERROR:
      return {
        ...state,
        studentData: { ...state.studentData, error: true },
      };
    default:
      return state;
  }
};
