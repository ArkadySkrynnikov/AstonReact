import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ApiData, FilmsInitialState } from '../../../types/apiData.ts'
import { fetchFilms } from '../../../api/fetchFilms.ts'

export const fetchFilmsCollections = createAsyncThunk(
    'fetchFilmsCollections',
    async (queryString: string) => {
        return await fetchFilms('/collections?' + queryString)
    },
)

const initialState: FilmsInitialState = {
    isLoading: false,
    data: {
        items: [],
        total: 0,
        totalPages: 0,
    },
    error: false,
}

const searchCollectionsSlice = createSlice({
    name: 'searchCollections',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFilmsCollections.pending, (state) => {
            state.isLoading = true
            state.data = {
                items: [],
                totalPages: 0,
                total: 0,
            }
        })
        builder.addCase(
            fetchFilmsCollections.fulfilled,
            (state, action: PayloadAction<ApiData>) => {
                state.isLoading = false
                state.data = action.payload
            },
        )
        builder.addCase(fetchFilmsCollections.rejected, (state) => {
            state.error = true
        })
    },
})

export default searchCollectionsSlice.reducer
