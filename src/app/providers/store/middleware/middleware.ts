import { createListenerMiddleware, TypedStartListening } from '@reduxjs/toolkit'
import { RootState, store } from '../store.tsx'

type Dispatch = typeof store.dispatch
type AppStartListening = TypedStartListening<RootState, Dispatch>

export const FavoriteLogsMiddleware = createListenerMiddleware()

const startTypedListening =
    FavoriteLogsMiddleware.startListening as AppStartListening

startTypedListening({
    type: '@favorite/addMovieToFavorite/fulfilled',
    effect: (_, { getState }) => {
        const movie = getState().favorite.movies.length
        console.log('Фильм успешно добавлен в избранное', movie)
    },
})

startTypedListening({
    type: '@favorite/addMovieToFavorite/pending',
    effect: (_, { getState }) => {
        const loading = getState().favorite.isLoading
        console.log('Добавляем фильм, загрузка: ', { loading })
    },
})

startTypedListening({
    type: '@favorite/addMovieToFavorite/rejected',
    effect: (_, { getState }) => {
        const error = getState().favorite.error
        console.log('Произошла ошибка : ', { error })
    },
})

startTypedListening({
    type: '@favorite/removeMovieFromFavorite/fulfilled',
    effect: (_, { getState }) => {
        const movie = getState().favorite.movies
        console.log('Оставшиеся в избранном: ', movie)
    },
})

startTypedListening({
    type: '@favorite/removeMovieFromFavorite/pending',
    effect: (_, { getState }) => {
        const loading = getState().favorite.isLoading
        console.log('Удаляем фильм, загрузка: ', { loading })
    },
})

startTypedListening({
    type: '@favorite/removeMovieFromFavorite/rejected',
    effect: (_, { getState }) => {
        const error = getState().favorite.error
        console.log('Произошла ошибка : ', { error })
    },
})

startTypedListening({
    type: '@favorite/getFavoriteFromFirebaseDB/fulfilled',
    effect: (_, { getState }) => {
        const movies = getState().favorite.movies
        console.log('Список фильмов получен: ', { movies })
    },
})

startTypedListening({
    type: '@favorite/getFavoriteFromFirebaseDB/pending',
    effect: (_, { getState }) => {
        const loading = getState().favorite.isLoading
        console.log('Проверяем список ваших фильмов: ', { loading })
    },
})

startTypedListening({
    type: '@favorite/getFavoriteFromFirebaseDB/rejected',
    effect: (_, { getState }) => {
        const error = getState().favorite.error
        console.log('Произошла ошибка ваших фильмов: ', { error })
    },
})
