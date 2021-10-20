import { IUser } from './../../models/IUser';
import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import {fetchUsers} from './ActionCreators'


interface UserState {
    users: IUser[];
    isLoanding: boolean;
    error: string;
    
}
const initialState:UserState = {
    users:[],
    isLoanding: false,
    error: ''
    
}
export const userSlice = createSlice({
name:'user',
initialState,
reducers:{},

extraReducers:{
    [fetchUsers.fulfilled.type]:(state,action: PayloadAction<IUser[]>)=>{
        state.isLoanding = false
        state.error = ''
        state.users = action.payload
},
[fetchUsers.pending.type]:(state)=>{
    state.isLoanding = true
},
[fetchUsers.rejected.type]:(state,action: PayloadAction<string>)=>{
    state.isLoanding = false
    state.error = action.payload
},
}
})

export default userSlice.reducer