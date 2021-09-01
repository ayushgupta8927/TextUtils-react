
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#343a40';
      showalert("Dark mode has been enabled ","success");
      document.title="TextUtils - Dark mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("light mode has been enabled ","success");

    }
  }
  return (
    <>
        {/* <Router> */}

    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      
      {/* <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/"> */}
        <TextForm showalert={showalert} heading="Enter the text to Analyze" mode={mode}/>
        {/* </Route>
      </Switch>  */}
      </div>
      {/* </Router> */}
    
    </>
  );
}

export default App;
