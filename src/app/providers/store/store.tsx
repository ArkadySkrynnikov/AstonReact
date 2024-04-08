import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../../../shared/reducers/Auth/slices/userSlice.tsx'
import searchFilmByIdReducer from '../../../shared/reducers/Search/slices/searchByIdSlice.ts'
import searchFilmsReducer from '../../../shared/reducers/Search/slices/searchSlice.ts'
import userFavoriteReducer from '../../../shared/reducers/Favorite/slices/FavoriteSlices.tsx'
import searchHistoryReducer from '../../../shared/reducers/History/slices/searchHistorySlice.ts'
import featureSliceReducer from '../../../shared/reducers/Feature/slices/featureSlice.ts'
import { FavoriteLogsMiddleware } from './middleware/middleware.ts'


export const store = configureStore({
    reducer: {
        userStore: userReducer,
        searchById: searchFilmByIdReducer,
        searchFilms: searchFilmsReducer,
        favorite: userFavoriteReducer,
        searchHistory: searchHistoryReducer,
        feature: featureSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    '@favorite/addMovieToFavorite/fulfilled',
                    '@favorite/addMovieToFavorite/rejected',
                    '@favorite/removeMovieFromFavorite/fulfilled',
                    '@favorite/removeMovieFromFavorite/rejected',
                    '@favorite/getFavoriteFromFirebaseDB/fulfilled',
                    '@favorite/getFavoriteFromFirebaseDB/rejected',
                ],
            },
        }).concat(FavoriteLogsMiddleware.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
