import React, { useState, useEffect } from 'react';
import Login from './Login';

const App = () => {
  const [background, setBackground] = useState('white');
  const [currentTime, setCurrentTime] = useState(new Date().getHours() + 10);
  console.log(currentTime);
  let style = {
    backgroundColor: background
  };
  const handleClick = () => {
    setBackground('red');
  };

  useEffect(() => {
    const changeColor = () => {
      if (currentTime >= 0 && currentTime < 9) {
        setBackground('red');
      } else if (currentTime > 9 && currentTime < 15) {
        setBackground('blue');
      } else if (currentTime > 16) {
        setBackground('green');
      }
    };
    changeColor();
  }, []);

  //check conditional login

  return (
    <div id="app" onClick={handleClick} style={style}>
      <h3>App</h3>
    </div>
  );
};
export default App;
