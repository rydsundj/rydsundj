import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import backgroundImageLight from "./images/BackG.jpg";
import backgroundImageDark from "./images/BackGDark.png";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div style={{ minHeight: "100vh", width: "100vw", position: "relative" }}>
      {/* Static background */}
      <img
        src={isDarkMode ? backgroundImageDark : backgroundImageLight}
        alt="background"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Content on top */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Home isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default App;
