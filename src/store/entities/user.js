import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import * as apiActions from '../actions/api';

//temporary variables..should be in environment?
let url='/auth';

const slice=createSlice({
    name:'user',
    initialState:{
        user:{},
        token:null,
        isLoggedIn:false,
    },
    reducers:{
        userLoginRequested:(user,action)=>{},
        userLoggedIn:(user,action)=>{
            user.user=action.payload.user;
            user.token=action.payload.token;
            user.isLoggedIn=true;
        },
        userLoginFailed:(user,action)=>{}
    }
});

export default slice.reducer;

//user actions
const {userLoginRequested,userLoggedIn,userLoginFailed}=slice.actions;

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