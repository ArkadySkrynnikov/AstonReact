import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../../../shared/reducers/Auth/slices/userSlice.tsx'
import searchWithFiltersReducer from '../../../shared/reducers/Search/slices/searchWithFilterSlice.ts'
import searchCollectionsReducer from '../../../shared/reducers/Search/slices/searchCollections.ts'
import searchFilmByIdReducer from '../../../shared/reducers/Search/slices/searchById.ts'
import searchFilmsSuggestionsReducer from '../../../shared/reducers/Search/slices/suggestionsMenuSlice.ts'

export const store = configureStore({
    reducer: {
        userStore: userReducer,
        searchWithFilters: searchWithFiltersReducer,
        searchCollections: searchCollectionsReducer,
        searchById: searchFilmByIdReducer,
        suggestionsMenu: searchFilmsSuggestionsReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
