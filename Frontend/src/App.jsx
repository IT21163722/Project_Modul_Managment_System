import { useState } from 'react';
import './App.css';
import Navigation from './components/NavigationTemplate/Navigation';
import {ThemeContext} from "./ThemeContext";
import Main from './Main/Main';
import SAssignment from './Main/SMain/SAssignment';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [ DarkTheme, setDarkTheme ] = useState(true);
  return (
    <Router>
    <ThemeContext.Provider value={{ DarkTheme, setDarkTheme }}>
     
    <div className='App'><Navigation /> 

      <Routes>
        <Route path="/Main" element={<Main />}/>
        <Route path="/SAssignment" element={<SAssignment />}/>
      </Routes>
    
    
    
    </div>

  </ThemeContext.Provider>
  </Router>
  );
}

export default App;