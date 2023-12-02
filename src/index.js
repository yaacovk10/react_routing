import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from './Contact';
import Yaacov from './Yaacov/Yaacov';
import YaacovHai from './Yaacov/YaacovHai';
import YaacovKorchia from './Yaacov/YaacovKorchia';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<h1>Welcome to my super</h1>}/>
          <Route path="contact" element={<Contact />} />
          <Route path="yaacov" element={<Yaacov />} >
            <Route path="yaacov/yaacovhai" element={<YaacovHai />} />
            <Route path="yaacov/yaacovkorchia" element={<YaacovKorchia />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
