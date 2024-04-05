import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ApiData, FilmsInitialState } from '../../../types/apiData.ts'
import { fetchFilms } from '../../../api/fetchFilms.ts'

export const fetchFilmsSuggestions = createAsyncThunk(
    '@films/fetchFilmsSuggestions',
    async (queryString: string, { rejectWithValue }) => {
        try {
            return await fetchFilms('?' + queryString)
        } catch (e) {
            return rejectWithValue(e)
        }
    },
)

export const fetchFilmsList = createAsyncThunk(
    '@films/fetchFilmsList',
    async (queryString: string, { rejectWithValue }) => {
        try {
            return await fetchFilms('?' + queryString)
        } catch (e) {
            return rejectWithValue(e)
        }
    },
)

export const fetchFilmsCollections = createAsyncThunk(
    '@films/fetchFilmsCollections',
    async (queryString: string, { rejectWithValue }) => {
        try {
            return await fetchFilms('/collections?' + queryString)
        } catch (e) {
            return rejectWithValue(e)
        }
    },
)

type SearchInitialState = {
    suggestionMenu: FilmsInitialState
    filmsList: FilmsInitialState
    filmsCollections: FilmsInitialState
}

const initialState: SearchInitialState = {
    suggestionMenu: {
        isLoading: false,
        data: {
            items: [],
            total: 0,
            totalPages: 0,
        },
        error: false,
    },
    filmsList: {
        isLoading: false,
        data: {
            items: [],
            total: 0,
            totalPages: 0,
        },
        error: false,
    },
    filmsCollections: {
        isLoading: false,
        data: {
            items: [],
            total: 0,
            totalPages: 0,
        },
        error: false,
    },
}

const searchFilms = createSlice({
    name: 'searchFilmsLists',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //Саджесты
        builder.addCase(fetchFilmsSuggestions.pending, (state) => {
            state.suggestionMenu.isLoading = true
            state.suggestionMenu.data = {
                items: [],
                totalPages: 0,
                total: 0,
            }
        })
        builder.addCase(
            fetchFilmsSuggestions.fulfilled,
            (state, action: PayloadAction<ApiData>) => {
                state.suggestionMenu.isLoading = false
                state.suggestionMenu.data = action.payload
            },
        )
        builder.addCase(fetchFilmsSuggestions.rejected, (state) => {
            state.suggestionMenu.error = true
        })

        //Лист фильмов
        builder.addCase(fetchFilmsList.pending, (state) => {
            state.filmsList.isLoading = true
            state.filmsList.data = {
                items: [],
                totalPages: 0,
                total: 0,
            }
        })
        builder.addCase(
            fetchFilmsList.fulfilled,
            (state, action: PayloadAction<ApiData>) => {
                state.filmsList.isLoading = false
                state.filmsList.data = action.payload
            },
        )
        builder.addCase(fetchFilmsList.rejected, (state) => {
            state.filmsList.error = true
        })

        //коллекции
        builder.addCase(fetchFilmsCollections.pending, (state) => {
            state.filmsCollections.isLoading = true
            state.filmsCollections.data = {
                items: [],
                totalPages: 0,
                total: 0,
            }
        })
        builder.addCase(
            fetchFilmsCollections.fulfilled,
            (state, action: PayloadAction<ApiData>) => {
                state.filmsCollections.isLoading = false
                state.filmsCollections.data = action.payload
            },
        )
        builder.addCase(fetchFilmsCollections.rejected, (state) => {
            state.filmsCollections.error = true
        })
    },
})

export default searchFilms.reducer
