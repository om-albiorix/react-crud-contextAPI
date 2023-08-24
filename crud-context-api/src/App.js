import React from "react";
import { UserProvider } from "./contexts/UserContext";
import HomePage from "./components/HomePage";
const App = () => {
  return (
    <UserProvider>
      <HomePage />
    </UserProvider>
  );
};

export { App };
