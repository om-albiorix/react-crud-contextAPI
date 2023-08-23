import React from "react";
import HomePage from "./components/HomePage";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

const useUser = () => useContext(UserContext);

const App = () => {
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/user")
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        setUserdata(data);
      });
  }, []);

  return (
    <UserContext.Provider value={userdata}>
      <HomePage />
    </UserContext.Provider>
  );
};

export { App, useUser };
