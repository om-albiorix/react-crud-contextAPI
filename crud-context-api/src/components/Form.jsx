import React, { useState } from "react";
import { TextField } from "@mui/material";
import DropBtn from "./DropBtn";

function Form() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fname || lname || email || gender === "")
      alert("input field must be not empty");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            label="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <br />
          <DropBtn className="w-50 mb-2" />
          <button className="btn btn-success mt-2  d-flex justify-content-center">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
