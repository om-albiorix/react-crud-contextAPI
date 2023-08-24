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

  const handleDelete = (id) => {
    fetch(`http://localhost:9000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((data) => {
        setUserdata((prevState) => prevState.filter((ele) => ele.id !== id));
      });
  };

  const handleAdd = (fname, lname, age, email, e) => {
    e.preventDefault();
    fetch(`http://localhost:9000/user`, {
      method: "POST",
      body: JSON.stringify({
        fname: fname,
        lname: lname,
        age: age,
        email: email,
      }),
    })
      .then((res) => {
        const data = res.json();
        console.log("adddata", data);
        return data;
      })
      .then((data) => {
        setUserdata((user) => [...user, data]);
      });
  };

  return (
    <UserContext.Provider value={{ userdata, handleDelete, handleAdd }}>
      {children?.length > 1 ? children[1] : children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
