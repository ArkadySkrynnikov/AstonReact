import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchFeature } from '../../../api/fetchFeature.ts'

export const fetchFeatureShare = createAsyncThunk(
    '@feature/share',
    async (_, { rejectWithValue }) => {
        try {
            return await fetchFeature()
        } catch (e) {
            return rejectWithValue(e)
        }
    },
)

type featureInitialStateType = {
    data: Awaited<Promise<{ isTelegramShareEnabled: boolean }>>
    isLoading: boolean
    error: boolean
}

const initialState: featureInitialStateType = {
    data: {
        isTelegramShareEnabled: false,
    },
    isLoading: false,
    error: false,
}

const featureSlice = createSlice({
    name: 'featureSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFeatureShare.pending, (state) => {
            state.isLoading = true
            state.error = false
        })
        builder.addCase(
            fetchFeatureShare.fulfilled,
            (
                state,
                action: PayloadAction<{ isTelegramShareEnabled: boolean }>,
            ) => {
                state.data.isTelegramShareEnabled =
                    action.payload.isTelegramShareEnabled
                state.isLoading = false
            },
        )
    },
})

export default featureSlice.reducer
