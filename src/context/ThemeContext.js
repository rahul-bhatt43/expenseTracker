import React, { createContext, useState } from "react";

const themecontext = createContext(false);

const ThemeContext = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const toggleFunc = () => {
    setToggle(!toggle);
  };
  return (
    <themecontext.Provider
      value={{
        toggle,
        toggleFunc
      }}
    >
      {children}
    </themecontext.Provider>
  );
};

export { themecontext, ThemeContext };
