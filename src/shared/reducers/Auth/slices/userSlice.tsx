import { createSlice } from '@reduxjs/toolkit'

type User = {
    isAuth: boolean
    email: string | null
    username: string | null
    token: string | null
    id: string | null
}

type UserState = {
    user: User
    emailError: string | null
    passwordError: string | null
    userIsNotDefined: boolean
}

const initialUserState: UserState = {
    user: {
        isAuth: false,
        email: null,
        username: null,
        token: null,
        id: null,
    },
    emailError: null,
    passwordError: null,
    userIsNotDefined: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        setEmailError(state, action) {
            state.emailError = action.payload
        },
        setPasswordError(state, action) {
            state.passwordError = action.payload
        },
        setUserIsNotDefined(state) {
            state.userIsNotDefined = true
        },
        removeUser(state) {
            state.user = initialUserState.user
            localStorage.removeItem('user')
            localStorage.removeItem('isAuthenticated')
        },
    },
})

export const {
    setUser,
    setEmailError,
    setPasswordError,
    setUserIsNotDefined,
    removeUser,
} = userSlice.actions
export default userSlice.reducer
