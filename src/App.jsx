import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
