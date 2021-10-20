import React, { useEffect } from 'react';
import './App.css'
import {useDispatch} from 'react-redux'
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/redusers/UserSlice';
import {fetchUsers} from './store/redusers/ActionCreators'
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';

function App() {

  //const {count} = useAppSelector(state => state.userReducer)
// const dispatch = useAppDispatch()
// const {users, isLoanding, error} = useAppSelector(state => state.userReducer)
// useEffect(() => {
//   dispatch(fetchUsers())
// }, [ ])
  return ( 
    <div className='App'>
      {/* {isLoanding && <h1>dowl</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null,2)} */}
      <div style={{display:'flex'}}>
      <PostContainer/>
      <PostContainer2/>
      </div>
    
    </div>
  );
}

export default App;
