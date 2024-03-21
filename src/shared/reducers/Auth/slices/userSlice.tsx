import { createSlice } from '@reduxjs/toolkit'

type InitialStateType = {
    user: {
        isAuth: boolean
        email: string | null
        username: string | null
        token: string | null
        id: string | null
    }
}

const initialUserState: InitialStateType = {
    user: {
        isAuth: false,
        email: null,
        username: null,
        token: null,
        id: null,
    },
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        removeUser(state) {
            state.user = initialUserState.user
        },
    },
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer
