import { RootState } from '../../../../app/providers/store/store.tsx'

export const getFilmByID = (state: RootState) => state.searchById

export const getSuggestions = (state: RootState) =>
    state.searchFilms.suggestionMenu

export const getFilmsData = (state: RootState) => state.searchFilms.filmsList

export const getCollectionsData = (state: RootState) =>
    state.searchFilms.filmsCollections
