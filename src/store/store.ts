import {combineReducers,configureStore } from '@reduxjs/toolkit'
import { postAPI } from '../services/PostService'
import userReducer from './redusers/UserSlice'
const rootReducer = combineReducers({
userReducer,
[postAPI.reducerPath]:postAPI.reducer
})

export  const setupStore = ()=> {
    return configureStore({
        reducer:rootReducer,
        middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(postAPI.middleware)
    })
}
export type RoorState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']