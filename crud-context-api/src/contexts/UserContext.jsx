import { createContext, useEffect, useState } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [userdata, setUserdata] = useState([]);
  const [open, setOpen] = useState(false);
  const [editdata, setEditData] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setEditData({});
  };

  useEffect(() => {
    fetch("http://localhost:9000/user", {
      method: "GET",
    })
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        setUserdata(data);
      })
      .catch((err) => {
        console.log({ err });
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

  const handleEdit = (fname, lname, age, email, id) => {
    setEditData({ fname, lname, age, id, email });
  };

  const handleAdd = (fname, lname, age, email) => {
    if (editdata) {
      fetch(`http://localhost:9000/user/${editdata.id}`, {
        method: "PUT",
      })
        .then((res) => {
          const data = res.json();
          console.log(data);
          return data;
        })
        .then((data) => {
          const updatedUsers = userdata.map((user) => {
            if (user.id === editdata.id) {
              user.fname = fname;
              user.lname = lname;
              user.email = email;
              user.age = age;
            }
            return user;
          });
          console.log({ updatedUsers });
          setUserdata((user) => updatedUsers);
        });
    } else {
      fetch("http://localhost:9000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname: fname,
          lname: lname,
          email: email,
          age: age,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log({ data });
          setUserdata((prevUserData) => [...prevUserData, data]);
        })
        .catch((error) => {
          console.error("Error adding user:", error);
        });
    }
  };

  return (
    <UserContext.Provider
      value={{
        userdata,
        handleDelete,
        handleAdd,
        handleEdit,
        handleClickOpen,
        handleClose,
        open,
        editdata,
        setUserdata,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
