import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import * as apiActions from '../actions/api';

//temporary variables..should be in environment?
const url='/auth';
const userStorageKey='user';
const tokenStorageKey='key';

const slice=createSlice({
    name:'user',
    initialState:{
        user:JSON.parse(localStorage.getItem(userStorageKey)) || {},
        token:localStorage.getItem(tokenStorageKey) || null,
        isLoggedIn:!!localStorage.getItem(tokenStorageKey),
        errors:null
    },
    reducers:{
        userLoginRequested:(user,action)=>{
            user.errors=null;
        },
        userLoggedIn:(user,action)=>{
            user.user=action.payload.user;
            user.token=action.payload.token;
            user.isLoggedIn=true;
            localStorage.setItem(userStorageKey,JSON.stringify(user.user));
            localStorage.setItem(tokenStorageKey,user.token);
        },
        userLoginFailed:(user,action)=>{
            user.errors=action.payload;
        },
        userLoggedOut:(user,action)=>{
            user.user=null;
            user.token=null;
            user.isLoggedIn=false;
            localStorage.removeItem(userStorageKey);
            localStorage.removeItem(tokenStorageKey);
        }
    }
});

export default slice.reducer;

//user actions
const {userLoginRequested,userLoggedIn,userLoginFailed,userLoggedOut}=slice.actions;

//commands
export const loginUser=(user)=>dispatch=>
    dispatch(apiActions.apiCallBegan({
    url:`${url}/login`,
    method:'post',
    data:user,
    onStart:userLoginRequested.type,
    onSuccess:userLoggedIn.type,
    onError:userLoginFailed.type
}));

export const logoutUser=()=>userLoggedOut();


//selectors

export const getUser=createSelector(
    state=>state.entities.user,
    user=>user.user
);

export const getUserToken=createSelector(
    state=>state.entities.user,
    user=>user.token
);

export const isLoggedIn=createSelector(
    state=>state.entities.user.isLoggedIn,
    isLoggedIn=>isLoggedIn
)

export const getUserErrors=createSelector(
    state=>state.entities.user,
    user=>user.errors
)