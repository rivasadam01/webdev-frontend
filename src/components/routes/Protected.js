import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../../store/entities/user";

const Protected=()=>{
    const loggedIn=useSelector(isLoggedIn);
    return loggedIn?<Outlet/>:<Navigate to="/login"/>;
}

export default Protected;