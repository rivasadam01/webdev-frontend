import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser,getUser,getUserToken} from './store/entities/user'
import './App.css';

function App() {
  const dispatch=useDispatch();
  const userToken=useSelector(getUserToken);
  const user=useSelector(getUser);

  useEffect(()=>{
    dispatch(loginUser({username:'zero',password:'password'}))
  },[])

  return (
    <div className="App">
      <h1>Webdev</h1>
      {user.nickname}, token:{userToken}
    </div>
  );
}

export default App;
