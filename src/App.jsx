import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import Calendar from './pages/Calendar/Calendar.jsx';
import Request from './pages/Request/Request.jsx';
import Navigation from './components/Navigation/Navigation.jsx';

function App() {
  return (
    <>
      <div className="app">
        <Navigation />
        <div className="content" style={{ marginTop: '64px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/request" element={<Request />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
