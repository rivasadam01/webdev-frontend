import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, isLoggedIn, getUserErrors } from '../../store/entities/user';
import loginImg from '../../assets/images/login.svg';
import './login.scss';

const Login=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const loggedIn=useSelector(isLoggedIn);
    const userErrors=useSelector(getUserErrors);
    const [username,setUserName]=useState('');
    const [password,setPassword]=useState('');

    useEffect(()=>{
        if(loggedIn)navigate('/');
    },[loggedIn]);

    const setInputField=({currentTarget:input})=>{
        switch(input.name){
            case 'username':
                setUserName(input.value)
                break;
            case 'password':
                setPassword(input.value)
                break;
            default:
                return
        }
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(loginUser({username,password}));
    }

    return <>
    <div id="login-container" className='m-2'>
        <div id='login-card'>
        <h2>Welcome back</h2>
           
                <div id='login-body'>
                    <img src={loginImg} alt="" width="200rem" />
                    <form onSubmit={handleSubmit}>
                        <div id='form-input' className='mb-1'>
                            <input type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                value={username}
                                onChange={setInputField}
                                required
                                />
                        </div>
                        <div id='form-input' className='mb-1'>
                            <input type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={setInputField}
                                required
                                />
                        </div>
                        <button type="submit" className='mb-1'>Login</button>
                        <span id="error-message">{userErrors&&userErrors.message}</span>
                    </form>
                </div>
           
        </div>
    </div>
    </>
}

export default Login;