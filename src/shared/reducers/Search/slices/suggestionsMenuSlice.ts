import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ApiData, filmsInitialState } from '../../../types/apiData.ts'
import { fetchFilms } from '../../../api/fetchFilms.ts'

export const fetchFilmsSuggestions = createAsyncThunk(
    'fetchFilmsSuggestions',
    async (queryString: string, { rejectWithValue }) => {
        try {
            return await fetchFilms('?' + queryString)
        } catch (e) {
            return rejectWithValue(e)
        }
    },
)

const initialState: filmsInitialState = {
    isLoading: false,
    data: {
        items: [],
        total: 0,
        totalPages: 0,
    },
    error: false,
}

const searchFilmsSuggestions = createSlice({
    name: 'searchFilmsSuggestions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFilmsSuggestions.pending, (state) => {
            state.isLoading = true
            state.data = {
                items: [],
                totalPages: 0,
                total: 0,
            }
        })
        builder.addCase(
            fetchFilmsSuggestions.fulfilled,
            (state, action: PayloadAction<ApiData>) => {
                state.isLoading = false
                state.data = action.payload
            },
        )
        builder.addCase(fetchFilmsSuggestions.rejected, (state) => {
            state.error = true
        })
    },
})

export default searchFilmsSuggestions.reducer
