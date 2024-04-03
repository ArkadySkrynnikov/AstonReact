import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../Auth/slices/userSlice.tsx'
import { FilmItem } from '../../../types/apiData.ts'

interface FavoriteState {
    movies: FilmItem[]
    error: string | undefined
    user: User | null
}

const initialState: FavoriteState = {
    movies: [],
    error: undefined,
    user: null,
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
        setUser(state, action) {
            state.user = action.payload
        },
        updateFavorite(state, action) {
            state.movies = action.payload
        },
    },
})

export const { addMovieToFavorite, removeFromMovieToFavorite, updateFavorite } =
    favoriteSlice.actions

export default favoriteSlice.reducer
