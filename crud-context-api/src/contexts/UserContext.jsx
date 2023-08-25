import { createContext, useEffect, useState } from "react";
import axios from "axios";

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
    setEditData(null);
  };

  useEffect(() => {
    axios
      .get("http://localhost:9000/user")
      .then((response) => {
        setUserdata(response.data);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:9000/user/${id}`).then((res) => {
      setUserdata((prevState) => prevState.filter((ele) => ele.id !== id));
    });
  };

  const handleEdit = (fname, lname, age, email, id) => {
    setEditData({ fname, lname, age, id, email });
  };

  const handleAdd = (fname, lname, age, email) => {
    if (editdata) {
      axios
        .put(`http://localhost:9000/user/${editdata.id}`, {
          fname: fname,
          lname: lname,
          email: email,
          age: age,
        })
        .then((response) => {
          const data = response.data;
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
          setUserdata(updatedUsers);
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });
    } else {
      axios
        .post("http://localhost:9000/user", {
          fname: fname,
          lname: lname,
          email: email,
          age: age,
        })
        .then((res) => {
          setUserdata([res.data, ...userdata]);
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
