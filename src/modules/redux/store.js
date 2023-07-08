import { configureStore } from '@reduxjs/toolkit'
import  settingReducer from './redux'
import profileReducer from './profile/profileSlice'

export default configureStore({
  reducer: {
    setting: settingReducer,
    profile: profileReducer
  },
})