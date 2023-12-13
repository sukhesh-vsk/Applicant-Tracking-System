import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element = { <Home/> } />
          <Route path='/login' element = { <Login/> }/>
          <Route path='/signup' element = { <SignUp/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
