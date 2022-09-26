import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchDragons = createAsyncThunk('dragon/fetchDragonList',
    async (args, thunkAPI) => {
    try{
        const response = await fetch('https://api.spacexdata.com/v4/dragons')
        const data = await response.json()
        return {
            data
        }
    }catch(e){
        return thunkAPI.rejectWithValue('Error fetching dragon')
    }
})