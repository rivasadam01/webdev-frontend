import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:'User',
    initialState:{
        user:{},
        token:null
    },
    reducers:{

    }
});

export default slice.reducer;