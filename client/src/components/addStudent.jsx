import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getStudents } from "../store/studentStore/actions";

export const AddStudent = () => {
  const [studentDetails, setStudentDteails] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setStudentDteails({ ...studentDetails, [e.target.name]: e.target.value });
  };
  //http://localhost:8080/
  const handleSubmit = () => {
    axios.post("http://localhost:8080/students", studentDetails).then((res) => {
      console.log(res);
      getStudentsData();
    });
  };
  const getStudentsData = async () => {
    console.log("inside get students");
    dispatch(getStudents());
  };
  console.log(studentDetails);
  return (
    <>
      <hr />
      <div>
        <h3>Add new Student</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <input
          onChange={handleChange}
          type="text"
          placeholder="Student Name"
          name="studentName"
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Student city"
          name="studentCity"
        />
        <input
          onChange={handleChange}
          type="number"
          placeholder="Student age"
          name="studentAge"
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Student education"
          name="studentEducation"
        />
        <select
          onChange={handleChange}
          type="text"
          placeholder="Student gender"
          name="studentGender"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          onChange={handleChange}
          type="number"
          placeholder="Student contact"
          name="studentContact"
        />{" "}
        <input onClick={handleSubmit} type="submit" />{" "}
      </div>
      <hr />
    </>
  );
};
