import React, { useState } from "react";
import Header from "./Header";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <Header isDarkMode= {isDarkMode} onDarkModeClick={onDarkModeClick}/> 

  );
}




export default App;
