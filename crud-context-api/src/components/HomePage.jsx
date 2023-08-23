import React from "react";
import TableList from "./TableList";
import ModalForm from "./ModalForm";

function HomePage() {
  return (
    <div>
      <div className="w-100 bg-dark text-white text-center">User Data</div>
      <div className="container-fluid mt-3">
        <ModalForm />
        <TableList />
      </div>
    </div>
  );
}
export default HomePage;
