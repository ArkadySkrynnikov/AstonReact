import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../../../app/providers/store/store.tsx'
import { setDoc, deleteDoc, collection, doc, getDocs } from 'firebase/firestore'
import { db } from '../../../../firebase.ts'
import { FilmItem } from '../../../types/apiData.ts'
import {
    addMovieToFavorite,
    removeFromMovieToFavorite,
    updateFavorite,
} from '../slices/FavoriteSlices.tsx'

export const addMovieToFavoriteDB = createAsyncThunk(
    '@favorite/addMovieToFavorite',
    async (movie: FilmItem, { dispatch, getState, rejectWithValue }) => {
        try {
            const state = getState() as RootState
            const user = state.userStore.user
            if (!user) {
                throw new Error('User is not authenticated.')
            }
            const userId = user.id
            const movieId = movie.kinopoiskId.toString()
            await setDoc(doc(db, `${userId}`, movieId), movie)
            dispatch(addMovieToFavorite(movie))
        } catch (error) {
            return rejectWithValue(error)
        }
    },
)

export const removeMovieFromFavorites = createAsyncThunk(
    '@favorite/removeMovieFromFavorite',
    async (kinopoiskId: number, { dispatch, getState, rejectWithValue }) => {
        try {
            const state = getState() as RootState
            const user = state.userStore.user
            if (!user) {
                throw new Error('User is not authenticated.')
            }
            const userId = user.id
            const movieId = kinopoiskId.toString()
            await deleteDoc(doc(db, `${userId}`, movieId))
            dispatch(removeFromMovieToFavorite(kinopoiskId))
        } catch (error) {
            return rejectWithValue(error)
        }
    },
)

export const getFavoriteFromFirebaseDB = createAsyncThunk(
    '@favorite/getFavoriteFromFirebaseDB',
    async (_, { getState, dispatch, rejectWithValue }) => {
        try {
            const state = getState() as RootState
            const user = state.userStore.user
            if (!user) {
                throw new Error('User is not authenticated.')
            }
            const userId = user.id
            const favoriteCol = collection(db, `${userId}`)
            const favoriteSnapshot = await getDocs(favoriteCol)
            const favoriteMovies = favoriteSnapshot.docs.map((doc) =>
                doc.data(),
            )
            dispatch(updateFavorite(favoriteMovies))
        } catch (error) {
            return rejectWithValue(error)
        }
    },
)
