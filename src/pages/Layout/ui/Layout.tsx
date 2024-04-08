import {
    removeUser,
    setUser,
} from '../../../shared/reducers/Auth/slices/userSlice.ts'
import {
    useAppDispatch,
    useAppSelector,
} from '../../../shared/hooks/redux-hooks.ts'
import { Outlet } from 'react-router-dom'
import { Header } from '../../../widgets/header/Header.tsx'
import { getUser } from '../../../shared/reducers/Auth/selectors/selectors.ts'
import { signOut } from 'firebase/auth'
import { auth } from '../../../firebase.ts'
import { useCheckAuth } from '../../../shared/hooks/useCheckAuth.tsx'
import { Suspense, useEffect } from 'react'
import { Loader } from '../../../shared/UI/Loader/Loader.tsx'

export const Layout = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(getUser)

    const logOutFn = () => {
        signOut(auth).then(function () {
            dispatch(removeUser())
        })
    }

    const signedUser = useCheckAuth()

    useEffect(() => {
        if (signedUser) {
            dispatch(
                setUser({
                    isAuth: true,
                    email: signedUser.email,
                    username: signedUser.displayName,
                    id: signedUser.uid,
                    token: signedUser.refreshToken,
                }),
            )
            localStorage.setItem('isAuthenticated', 'true')
        }
    }, [signedUser, dispatch])

    return (
        <>
            <Header
                username={user.username}
                isAuth={user.isAuth}
                logOutFn={logOutFn}
            />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    )
}
