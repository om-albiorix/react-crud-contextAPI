import { createContext, useContext, useEffect, useState } from "react";
const UserContext = createContext(null);

const UserProvider = ({ users, Children }) => {
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
    <UserContext.Provider value={{ userdata, setUserdata }}>
      {Children}
    </UserContext.Provider>
  );
};
