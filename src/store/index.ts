import {configureStore} from '@reduxjs/toolkit'
import dragonReducer from './reducers/dragon/dragonSlice'
import dragonsReducer from './reducers/dragons/dragonsSlice'


export const store = configureStore({
    reducer: {
        dragon: dragonReducer,
        dragonList: dragonsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch