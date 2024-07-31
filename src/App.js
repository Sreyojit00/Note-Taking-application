import React, { useState } from 'react';
import './App.css';
import BG from "./components/background.jpeg";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const [alert, setAlert]= useState(null);
  const showAlert =(message,type) => {

    setAlert({
      msg:message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);

    }, 1500);
  }
    
  return (
    <>
    
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          
          
          <div className="container" style={{ backgroundImage:`URL(${BG})`,backgroundColor:"#cccccc", display: "grid", alignitems: "left",
  justifycontent: "center", }}>
            <Switch>
              <Route exact path="/">
                <Home showAlert={showAlert} />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login showAlert = {showAlert}/>
              </Route>
              <Route exact path="/signup">
                <Signup showAlert = {showAlert}/>
              </Route>
            </Switch>
          </div>
          
        </Router>
      </NoteState>
    </>
  );
}

export default App;
