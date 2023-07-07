import { createSlice } from '@reduxjs/toolkit'

export const settingSlice = createSlice({
  name: 'Setting',
  initialState: {
    value: 0,
    loggedIn: false,
    username: "Null",
  },
  reducers: {
    Change: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(state);
      state.value = action.payload
    },
    LoggedIn: (state,action) => {
        state.loggedIn = action.payload

    },
    newUser: (state,action) => {
        state.username = action.payload
    }
  },
})
export const { LoggedIn, newUser } = settingSlice.actions
export const { Change } = settingSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const changeAsync = (site) => (dispatch) => {
  setTimeout(() => {
    dispatch(Change(site))
  }, 1000)
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectSetting = (state) => state.Setting.value
export const selectLoggedin = (state) => state.Setting.loggedIn

export default settingSlice.reducer