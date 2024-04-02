import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../../../shared/reducers/Auth/slices/userSlice.tsx'
import searchFilmByIdReducer from '../../../shared/reducers/Search/slices/searchById.ts'
import searchFilmsReducer from '../../../shared/reducers/Search/slices/search.ts'

export const store = configureStore({
    reducer: {
        userStore: userReducer,
        searchById: searchFilmByIdReducer,
        searchFilms: searchFilmsReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
