import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import backgroundImageLight from "./images/BackG.jpg";
import backgroundImageDark from "./images/BackGDark.png";
import Scene from "./components/windyleaves"; 

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div style={{ minHeight: "100vh", width: "100vw", position: "relative", overflow: "hidden" }}>
      {}
      <Scene image={isDarkMode ? backgroundImageDark : backgroundImageLight} />
      
      {}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Home isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default App;
