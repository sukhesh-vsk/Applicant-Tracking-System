import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='signup-cover'>
        <img src="./login.png" alt='image'/>
        <SignUp />
      </div>
    </div>
  );
}

export default App;
