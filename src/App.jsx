import { Routes, Route } from 'react-router-dom';
import Protected from './components/routes/Protected';
import Home from './components/Home';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/" element={<Protected/>}>
          <Route path="/" element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
