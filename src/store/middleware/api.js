import http from '../services/http'
import * as apiActions from "../actions/api"

const api=({dispatch})=>next=>async action=>{
    if(action.type!==apiActions.apiCallBegan.type)return next(action);
    const {url,method,data,onStart,onSuccess,onError}=action.payload;

    dispatch({type:onStart})
    next(action);
    try{
        const response=await http.request({
            url,
            method,
            data
        });
        dispatch(apiActions.apiCallSuccess(response.data));
        if(onSuccess)dispatch({type:onSuccess,payload:response.data});
    }
    catch(err){
        dispatch(apiActions.apiCallFailed(err.response.data));
        if(onError)dispatch({type:onError,payload:err.response.data});
    }
}

export default api;