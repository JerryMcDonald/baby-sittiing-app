import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import PageOne from './pages/PageOne/PageOne.jsx';
import PageTwo from './pages/PageTwo/PageTwo.jsx';
import Navigation from './components/Navigation/Navigation.jsx';

function App() {
  return (
    <>
      <div className="app">
        <Navigation />
        <div className="content" style={{ marginTop: '64px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pageone" element={<PageOne />} />
            <Route path="/pagetwo" element={<PageTwo />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
