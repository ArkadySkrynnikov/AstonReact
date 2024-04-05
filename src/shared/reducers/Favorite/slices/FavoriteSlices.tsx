import { createSlice } from '@reduxjs/toolkit'
import { FilmItem } from '../../../types/apiData.ts'
import {
    addMovieToFavoriteDB,
    getFavoriteFromFirebaseDB,
    removeMovieFromFavorites,
} from '../actions/FavoriteActions.tsx'

type FavoriteState = {
    movies: FilmItem[]
    error: string | undefined
    isLoading: boolean
}

const initialState: FavoriteState = {
    movies: [],
    error: undefined,
    isLoading: true,
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addMovieToFavorite(state, action) {
            state.movies.unshift(action.payload)
        },
        removeFromMovieToFavorite(state, action) {
            state.movies = state.movies.filter(
                (movie) => movie.kinopoiskId !== action.payload,
            )
        },
        updateFavorite(state, action) {
            state.movies = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addMovieToFavoriteDB.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
            .addCase(removeMovieFromFavorites.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
            .addCase(getFavoriteFromFirebaseDB.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    },
})

export const { addMovieToFavorite, removeFromMovieToFavorite, updateFavorite } =
    favoriteSlice.actions

export default favoriteSlice.reducer
