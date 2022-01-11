import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Webdev</h1>

      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
