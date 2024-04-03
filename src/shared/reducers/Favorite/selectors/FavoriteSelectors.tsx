import { RootState } from '../../../../app/providers/store/store.tsx'
import { createSelector } from '@reduxjs/toolkit'

export const selectFavoritesState = (state: RootState) => state.favorite

export const getFavorites = createSelector(
    [selectFavoritesState],
    (favoritesState) => favoritesState.movies,
)
