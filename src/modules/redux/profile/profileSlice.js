import {createSlice} from '@reduxjs/toolkit';

let defaultState = {
    id: 0,
    username: 'null',
    isAdmin: false,
    isLoggedIn: false
}
export const profileSlice = createSlice({
    name: 'Profile',
    initialState: defaultState,
    reducers: {
        Login: (state, action) => {
            state = action.payload;
            console.log('logged in as ' + action.payload.username);
            console.log(state)
            return(state)
        },
        Logout: (state, action) => {
            state = defaultState;
            console.log('logged out');
            return(state)
        }
    }
})

export const { Login,Logout } = profileSlice.actions;
export const selectProfileUsername = (state) => state.profile.username;
export const selectProfileIsLoggedIn = (state) => state.profile.isLoggedIn;
export const selectProfileIsAdmin = (state) => state.profile.isAdmin;

export default profileSlice.reducer