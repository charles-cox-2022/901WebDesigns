import { configureStore } from '@reduxjs/toolkit'
import  settingReducer from './redux'

export default configureStore({
  reducer: {
    setting: settingReducer,
  },
})