import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchDragon = createAsyncThunk('dragon/fetchDragon',
    async (args, thunkAPI) => {
    try{
        const response = await fetch('https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f')
        const data = await response.json()
        return {
            data
        }
    }catch(e){
        return thunkAPI.rejectWithValue('Error fetching dragon')
    }
})