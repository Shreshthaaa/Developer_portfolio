import React, { useState, useEffect } from "react";
import Navbar from "./Components/NavBar/Navbar";
import Body from "./Components/Body/Body";

const App = () => {

  const [theme, setTheme] = useState('light');
  const [text, setText] = useState('a Developer');
  return (
    <div className="App">
      <div className={`container ${theme} ${text}`}>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Body text={text} setText={setText} />
      </div>
    </div>
  )

}

export default App