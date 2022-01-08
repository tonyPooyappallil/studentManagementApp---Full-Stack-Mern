import axios from "axios";
import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getStudents } from "../store/studentStore/actions";

export const ShowStudents = () => {
  // const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const studentsData = useSelector(
    (store) => store.studentData.data,
    shallowEqual
  );

  useEffect(() => {
    getStudentsData();
  }, []);
  const getStudentsData = async () => {
    console.log("inside get students");
    dispatch(getStudents());
  };
  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8080/students/${id}`).then((res) => {
      console.log(res);
      getStudentsData();
    });
  };
  console.log(studentsData, "studentsData");

  return (
    <div>
      <h3>Students List</h3>
      {studentsData.length === 0 ? (
        <h4>List is Empty</h4>
      ) : (
        studentsData.map((el, index) => (
          <div key={index}>
            <div>Student name :{el.studentName}</div>
            <div>Student City :{el.studentCity}</div>
            <div>Student Age :{el.studentAge}</div>
            <div>Student Education :{el.studentEducation}</div>
            <div>Student Gender :{el.studentGender}</div>
            <div>Student Contact :{el.studentContact}</div>
            <div>
              <button
                onClick={() => {
                  handleDelete(el._id);
                }}
              >
                Delete this Student
              </button>
            </div>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};
