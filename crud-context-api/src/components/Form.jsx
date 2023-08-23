import React from "react";
import { TextField } from "@mui/material";
import DropBtn from "./DropBtn";

function Form() {
  return (
    <div>
      <form>
        <div>
          <div>
            <TextField className="w-50" label="FirstName" />
            <TextField className="w-50 " label="LastName" />
          </div>
          <br />
          <div>
            <TextField className="w-100 mr-3" label="Email" />
          </div>
          <br />
          <TextField className="w-50" label="gender" />
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
