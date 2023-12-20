import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Login, SignUp, Home, LandingPage } from './components/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <LandingPage />
      {/* <Router>
        <Routes>
          <Route path='/' element = { <Home/> } />
          <Route path='/login' element = { <Login/> }/>
          <Route path='/signup' element = { <SignUp/> }/>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
