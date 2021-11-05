
import './App.css';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, { useState } from 'react'
import Alert from './Component/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
    const showAlert =(message, type)=>{
       setAlert({
         msg: message,
         type: type
       })
       setTimeout(() => {
         setAlert(null);
       }, 1500);

    }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark has been Enable","success");
      document.title="Textutils = Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light has been Enable","success");
      
      document.title="Textutils = Light Mode";
    }
  }

  
  return (
<>
{/* <Router> */}
 <Navbar title="Textutils" abouttext= "About" mode={mode}  toggleMode={toggleMode} /> 
<Alert alert={alert}/>

<div className="container my-3">
{/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About  mode={mode} /> */}
          {/* </Route> */}
         
 <TextForm showAlert={showAlert} heading="Enter text to Analyze Below" mode={mode}/>
 {/* </Route> */}
          
        {/* </Switch> */}

 </div>
 {/* </Router> */}
 {/* Run `npm audit` */}
 {/* npm audit fix */}
 {/* run `npm fund` */}

</>

   
  );
}

export default App;
