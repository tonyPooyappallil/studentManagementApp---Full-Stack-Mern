import { AddStudent } from "./addStudent";
import { ShowStudents } from "./showStudents";

export const AdminPanel = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <AddStudent></AddStudent>
      <ShowStudents></ShowStudents>
    </div>
  );
};
