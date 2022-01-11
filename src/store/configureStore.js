import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from './rootReducer';
import apiMiddleWare from './middleware/api';

const store=()=>configureStore({
    reducer: rootReducer,
    middleware:[...getDefaultMiddleware(),apiMiddleWare]
})

export default store;