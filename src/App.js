import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './context/notes/NoteState';
import Alert from './Components/Alert';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { useState } from 'react';


function App() {

  const [alert,setAlert]=useState(null)
  const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })

    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  return (
    <>
    <NoteState>
      <BrowserRouter>
          <Navbar />
          <Alert alert={alert}/>
          <div className='container'>
        <Routes>
          <Route path="/" element={<Home showAlert={showAlert}/>}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/login" element={<Login showAlert={showAlert}/>}/>
          <Route exact path="/signup" element={<Signup showAlert={showAlert}/>}/>
        </Routes>
        </div>
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;

