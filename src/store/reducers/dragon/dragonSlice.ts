import {Dragon} from "../../../types/Dragon";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchDragon} from "./actionCreators";

interface DragonState{
    dragon: Dragon;
    isLoading: boolean;
    error: string;
}

const initialState: DragonState = {
    dragon: {} as Dragon,
    isLoading: true,
    error: ''
}

export const dragonSlice = createSlice({
    name: 'dragon',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchDragon.pending.type]: (state: DragonState, action) => {
            state.dragon = {} as Dragon
            state.error = ''
            state.isLoading = true
        },
        [fetchDragon.fulfilled.type]: (state: DragonState, action: PayloadAction<{data: Dragon}>) => {
            state.isLoading = false
            state.dragon = action.payload.data
        },
        [fetchDragon.rejected.type]: (state: DragonState, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})
export default dragonSlice.reducer