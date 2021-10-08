import './App.css';
import './css/home.css'
import Model1 from './templates/Model1';
import Navbar from './templates/Navbar';
import {useState} from 'react';
function App() {
  const [mode , setmode] = useState('dark')
  const toggleMode = ()=>{
    if (mode === 'dark'){
      setmode('#2F2E2B')
      document.body.style.backgroundColor = '#2F2E2B'
      document.body.style.color = 'white'

    }
    else{
      setmode('dark')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#2F2E2B'
    }
  }
  return (
    <>
      <Navbar title = "SHIVAM" mode = {mode} toggleMode= {toggleMode} />
      <Model1 heading = "Enter Your Text Element" mode={mode}/>
    </>
  );
}

export default App;
