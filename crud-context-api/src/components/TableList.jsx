import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { UserContext } from "../contexts/UserContext";
import { HandleDeleteData } from "../contexts/UserContext";

function TableList() {
  const userList = useContext(UserContext);
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
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
          {userList.map((data, index) => {
            return (
              <tr key={index}>
                <td scope="row">{data.fname + data.lname}</td>
                <td>{data.email}</td>
                <td>{data.age}</td>
                <td>{data.gender}</td>
                <td onClick={HandleDeleteData(index)}>
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
