import { RootState } from '../../../../app/providers/store/store.tsx'

export const getFilmsData = (state: RootState) => state.searchWithFilters
export const getCollectionsData = (state: RootState) => state.searchCollections
export const getFilmByID = (state: RootState) => state.searchById
export const getSuggestions = (state: RootState) => state.suggestionsMenu
