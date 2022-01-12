import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../store/entities/user';

const Logout=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    
    useEffect(()=>{
        dispatch(logoutUser());
        navigate('/login');
    },[]);
    return null;
}

export default Logout;