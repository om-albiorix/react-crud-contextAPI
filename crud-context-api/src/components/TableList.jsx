import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { UserContext } from "../contexts/UserContext";

function TableList() {
  const {
    userdata,
    handleDelete,
    handleAdd,
    handleEdit,
    handleClickOpen,
    handleClose,
    open,
  } = useContext(UserContext);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">FullName</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            {/* <th scope="col">Gender</th> */}
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userdata?.map((data, index) => {
            return (
              <tr key={index}>
                <td scope="row">{data.fname + " " + data.lname}</td>
                <td>{data.email}</td>
                <td>{data.age}</td>
                {/* <td>{data.gender}</td> */}
                <td>
                  <button
                    className="btn btn-danger deletebtn"
                    onClick={() => {
                      handleDelete(data.id);
                      window.confirm("Are you sure ?");
                    }}
                  >
                    <DeleteIcon />
                  </button>

                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      handleEdit(
                        data.fname,
                        data.lname,
                        data.age,
                        data.email,
                        data.id
                      );
                      handleClickOpen();
                    }}
                  >
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
