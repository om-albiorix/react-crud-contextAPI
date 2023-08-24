import React, { useContext, useState } from "react";
import { TextField } from "@mui/material";
import { UserContext } from "../contexts/UserContext";
// import DropBtn from "./DropBtn";

function Form({ onClose }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const { userdata, handleDelete, handleAdd } = useContext(UserContext);

  return (
    <div>
      <form>
        <div>
          <div>
            <TextField
              className="w-50"
              onChange={(e) => setFname(e.target.value)}
              label="FirstName"
              value={fname}
            />
            <TextField
              className="w-50 "
              label="LastName"
              value={lname}
              onChange={(e) => {
                setLname(e.target.value);
              }}
            />
          </div>
          <br />
          <div>
            <TextField
              className="w-100 mr-3"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <TextField
            className="w-50"
            label="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          {/* <DropBtn className="w-50 mb-2" /> */}
          <button
            className="btn btn-success mt-2  d-flex justify-content-center m-auto"
            onClick={(e) => {
              e.preventDefault();
              handleAdd(fname, lname, age, email);
              onClose();
            }}
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
