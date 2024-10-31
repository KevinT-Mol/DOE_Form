import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Myform from './modules/Layout/Layout';
import Associate from './modules/Associate/Associate';
import LineManager from './modules/Line Manager/LineManager';


function App() {
  return (
    <layout>
      <BrowserRouter>
        <Routes>
          <Route path= "/" element= {<Myform/>} >
            
            <Route path= "Associate" element= {<Associate/>} />
            <Route path="LineManager" element={<LineManager/>} />

          </Route>
        </Routes>
      
      </BrowserRouter>
    </layout>
    
  );
}

export default App;
