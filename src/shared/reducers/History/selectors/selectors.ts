import { RootState } from '../../../../app/providers/store/store.tsx'

export const getSearchHistory = (state: RootState) =>
    state.searchHistory.currentItemsInLs
