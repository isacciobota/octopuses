import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages
import App from './App';
import Home from './components/Home.js'
import Skin from './components/Skin.js'
import Accessories from './components/Accessories.js'
import Clothes from './components/Clothes.js'
import Eyes from './components/Eyes.js'
import Mouth from './components/Mouth.js'
import Tentacles from './components/Tentacles.js'
import Brows from './components/Brows.js'
import Background from './components/Background.js'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/skin" element={<Skin />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/eyes" element={<Eyes />} />
        <Route path="/mouth" element={<Mouth />} />
        <Route path="/tentacles" element={<Tentacles />} />
        <Route path="/brows" element={<Brows />} />
        <Route path="/background" element={<Background />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
