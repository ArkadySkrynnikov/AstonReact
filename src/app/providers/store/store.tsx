import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../../../shared/reducers/Auth/slices/userSlice.tsx'

export const store = configureStore({
    reducer: {
        userStore: userReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
