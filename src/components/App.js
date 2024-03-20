import React, { useState } from "react";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
  );
}

export default App;
