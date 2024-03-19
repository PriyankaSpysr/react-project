import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [textMode, setTextMode] = useState('Enable Dark Mode');

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      setTextMode('Enable Light Mode');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
    }else{
      setMode('light');
      setTextMode('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
    <Navbar title="ReactJs" mode={mode} toggleMode={toggleMode} textMode={textMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
