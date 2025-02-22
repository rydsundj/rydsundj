import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import backgroundImageLight from './images/BackG.jpg';
import backgroundImageDark from './images/BackGDark.png';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const appStyle = {
    minHeight: '100vh',
    width: '100vw',
    backgroundImage: `url(${isDarkMode ? backgroundImageDark : backgroundImageLight})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={appStyle}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Home isDarkMode={isDarkMode} /> {}
    </div>
  );
  
};

export default App;
