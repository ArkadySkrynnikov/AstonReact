import { useAppSelector } from './redux-hooks.ts'

const useAuth = () => {
    const { email, token, id, username } = useAppSelector(
        (state) => state.userStore.user,
    )

    return {
        isAuth: !!email,
        email,
        username,
        token,
        id,
    }
}

export default useAuth
