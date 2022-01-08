import axios from "axios";
import {
  GET_STUDENTS_ERROR,
  GET_STUDENTS_LOADING,
  GET_STUDENTS_SUCCESS,
} from "./actionTypes";

export const getStudentsloading = () => ({ type: GET_STUDENTS_LOADING });
export const getStudentsSuccess = (data) => ({
  type: GET_STUDENTS_SUCCESS,
  payload: data,
});
export const getStudentsError = (data) => ({
  type: GET_STUDENTS_ERROR,
});

export const getStudents = () => async (dispatch) => {
  dispatch(getStudentsloading());
  try {
    const { data } = await axios.get("http://localhost:8080/students");
    //console.log(data);
    dispatch(getStudentsSuccess(data.data));
  } catch (error) {
    dispatch(getStudentsError(error));
  }
};
