import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../../../shared/reducers/Auth/slices/userSlice.tsx'
import searchFilmByIdReducer from '../../../shared/reducers/Search/slices/searchByIdSlice.ts'
import searchFilmsReducer from '../../../shared/reducers/Search/slices/searchSlice.ts'
import userFavoriteReducer from '../../../shared/reducers/Favorite/slices/FavoriteSlices.tsx'
import searchHistoryReducer from '../../../shared/reducers/History/slices/searchHistorySlice.ts'

export const store = configureStore({
    reducer: {
        userStore: userReducer,
        searchById: searchFilmByIdReducer,
        searchFilms: searchFilmsReducer,
        favorite: userFavoriteReducer,
        searchHistory: searchHistoryReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
