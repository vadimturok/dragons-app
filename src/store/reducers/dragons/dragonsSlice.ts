import {Dragon} from "../../../types/Dragon";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchDragons} from "./actionCreators";

interface DragonsState{
    dragons: Dragon[];
    isLoading: boolean;
    error: string;
}

const initialState: DragonsState = {
    dragons: [],
    isLoading: true,
    error: ''
}

export const dragonsSlice = createSlice({
    name: 'dragons',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchDragons.pending.type]: (state: DragonsState, action) => {
            state.dragons = []
            state.error = ''
            state.isLoading = true
        },
        [fetchDragons.fulfilled.type]: (state: DragonsState, action: PayloadAction<{data: Dragon[]}>) => {
            state.isLoading = false
            state.dragons = action.payload.data
        },
        [fetchDragons.rejected.type]: (state: DragonsState, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})
export default dragonsSlice.reducer