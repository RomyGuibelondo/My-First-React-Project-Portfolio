import { createContext, useState } from "react";
import Header from "./conponents/Header";
import Home from "./conponents/Home";
import Porfolio from './conponents/Porfolio'
import About from "./conponents/About";
import Contact from './conponents/Contact'
export const ThemeContext = createContext(null);



function App() {
 const [theme, setTheme] = useState("mode");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "lightmode" ? "dark" : "lightmode"));
  };
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>  
      <div className="app" id={theme}>
        <Header/>
        <Home />
        <Porfolio  />
        <About />
        <Contact />
        <div>
          <button onClick={toggleTheme} id="dark-mode-toggle" className="dark-mode-toggle">
            <svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496"><path fill="currentColor" d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z" transform="translate(-8 -8)"/></svg>
          </button>
        </div>
      </div>
    </ThemeContext.Provider>
    
    
  )
}

export default App