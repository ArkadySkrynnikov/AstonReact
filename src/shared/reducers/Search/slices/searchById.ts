import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilmByIdInitialState, FilmInfo } from '../../../types/apiData.ts'
import { fetchFilms } from '../../../api/fetchFilms.ts'

export const fetchFilmById = createAsyncThunk(
    'fetchFilmById',
    async (queryString: string) => {
        return await fetchFilms('/' + queryString)
    },
)

const initialState: FilmByIdInitialState = {
    isLoading: false,
    data: {
        kinopoiskId: 0,
        kinopoiskHDId: '',
        imdbId: '',
        nameRu: '',
        nameEn: '',
        nameOriginal: '',
        posterUrl: '',
        posterUrlPreview: '',
        coverUrl: '',
        logoUrl: '',
        reviewsCount: 0,
        ratingGoodReview: 0,
        ratingGoodReviewVoteCount: 0,
        ratingKinopoisk: 0,
        ratingKinopoiskVoteCount: 0,
        ratingImdb: 0,
        ratingImdbVoteCount: 0,
        ratingFilmCritics: 0,
        ratingFilmCriticsVoteCount: 0,
        ratingAwait: 0,
        ratingAwaitCount: 0,
        ratingRfCritics: 0,
        ratingRfCriticsVoteCount: 0,
        webUrl: '',
        year: 0,
        filmLength: 0,
        slogan: '',
        description: '',
        shortDescription: '',
        editorAnnotation: '',
        isTicketsAvailable: false,
        productionStatus: '',
        type: '',
        ratingMpaa: '',
        ratingAgeLimits: '',
        hasImax: false,
        has3D: false,
        lastSync: '',
        countries: [],
        genres: [],
        startYear: 0,
        endYear: 0,
        serial: false,
        shortFilm: false,
        completed: false,
    },
    error: false,
}

const searchFilmByIdSlice = createSlice({
    name: 'searchFilmById',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFilmById.pending, (state) => {
            state.isLoading = true
            state.error = false
        })
        builder.addCase(
            fetchFilmById.fulfilled,
            (state, action: PayloadAction<FilmInfo>) => {
                state.isLoading = false
                state.data = action.payload
            },
        )
        builder.addCase(fetchFilmById.rejected, (state) => {
            state.error = true
        })
    },
})

export default searchFilmByIdSlice.reducer
