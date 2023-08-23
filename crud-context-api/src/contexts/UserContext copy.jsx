import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();
const UserProvider = ({ Children }) => {
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
    <UserContext.Provider value={userdata}>{Children}</UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  console.log(context);
  if (context === undefined)
    throw new Error("userContext was used in outside UserProvider");
  return context;
};

export { useUser, UserProvider };
