import React, { useEffect, useState } from 'react';
import './App.css';
import Details from './details';
import data from './restrauntData.json';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  Navigate,
} from 'react-router-dom';
import Nav from './nav';
import TableContent from './Table';
import Login from './login';
import cookie from 'cookie';
import Adding from "./form"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (cookie.parse(document.cookie).loggedIn === true) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/adding" element={<Adding/>}/>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/details" element={<Details />} />
        <Route path="/" element={<TableContent />} />
      </Routes>
    </div>
  );
}

export default App;
