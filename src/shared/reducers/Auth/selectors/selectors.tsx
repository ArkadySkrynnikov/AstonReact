import { RootState } from '../../../../app/providers/store/store.tsx'

export const getUser = (state: RootState) => state.userStore.user

export const getUserIsNotDefined = (state: RootState) =>
    state.userStore.userIsNotDefined
export const getEmailError = (state: RootState) => state.userStore.emailError
export const getPasswordError = (state: RootState) =>
    state.userStore.passwordError
