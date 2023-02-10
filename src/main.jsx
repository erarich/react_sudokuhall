import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/index.css';
import Home from './pages/Index';
import Easy from './pages/modes/Easy';
import Medium from './pages/modes/Medium';
import Hard from './pages/modes/Hard';
import VeryHard from './pages/modes/Very-Hard';
import Insane from './pages/modes/Insane';
import Inhuman from './pages/modes/Inhuman';

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/easy' element={<Easy />} />
      <Route exact path='/medium' element={<Medium />} />
      <Route exact path='/hard' element={<Hard />} />
      <Route exact path='/very-hard' element={<VeryHard />} />
      <Route exact path='/insane' element={<Insane />} />
      <Route exact path='/inhuman' element={<Inhuman />} />
    </Routes>
  </Router>
);