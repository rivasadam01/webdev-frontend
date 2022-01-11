import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {loginUser} from './store/entities/user'
import './App.css';

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(loginUser({username:'zero',password:'password'}))
  },[])
  return (
    <div className="App">
      <h1>Webdev</h1>
      
    </div>
  );
}

export default App;
