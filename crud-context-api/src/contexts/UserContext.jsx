import { createContext, useEffect, useState } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
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

  console.log({ userdata });

  return (
    <UserContext.Provider value={userdata}>
      {children?.length > 1 ? children[1] : children}
    </UserContext.Provider>
  );
};

const HandleDeleteData = ({ index }) => {
  useEffect(() => {
    fetch(`http://localhost:9000/user/${index}`, { method: "DELETE" })
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
};

export { UserProvider, UserContext, HandleDeleteData };
