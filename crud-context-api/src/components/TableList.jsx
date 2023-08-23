import React from "react";
import { useUser } from "../App";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function TableList() {
  const test = useUser();

  const handleDelete = (index) => {
    fetch(`"http://localhost:9000/user$/${index}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">FullName</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {test.map((data, index) => {
            return (
              <tr key={index}>
                <td scope="row">{data.fname + data.lname}</td>
                <td>{data.email}</td>
                <td>{data.age}</td>
                <td>{data.gender}</td>
                <td onClick={handleDelete(index)}>
                  <button className="btn btn-danger">
                    <DeleteIcon />
                  </button>
                </td>
                <td>
                  <button className="btn btn-primary">
                    <EditIcon />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableList;
