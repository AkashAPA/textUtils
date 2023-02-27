// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from "react";
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  // const [newMode, setNewMode] = useState('light');
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0e1e35';
      showAlert("Dark mode is enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
    }
  }
  return (
    // <>
    // <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode}/>
    // <Alert alert={alert} />
    // <div className="container my-3">
    // <TextForm showAlert={showAlert} heading= "Enter the text to analyze" mode={mode}/>
    // {/* <About/> */}

    // </div>
    // </>
<>
    <div className="App">
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
          <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          <Route path='/about' element={<About />} />
        </Routes>
          </div>
      </Router>
    </div>
    </>

  );
}

export default App;
